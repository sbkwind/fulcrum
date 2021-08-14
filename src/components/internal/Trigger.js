import { cloneElement, Component, createRef } from 'react'
import propTypes from 'prop-types'
import PortalWrapper from './Portal'
import Popup from './Popup'
import { composeRef } from '../utils'

const ACTIONS = ['hover', 'click', '']

class Trigger extends Component {
  constructor(props) {
    super(props)
    this.triggerRef = createRef()
    this.popupRef = createRef()
    this.delayTimer = null
    this.hasClickOutsideHandler = false
  }

  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    if (!this.props.visible) {
      return
    }
    if (this.isClickToHideOrShow() && !this.hasClickOutsideHandler) {
      document.addEventListener('click', this.handleClickPopupOutside)
      this.hasClickOutsideHandler = true
    }
  }

  componentWillUnmount() {
    if (this.isClickToHideOrShow() && this.hasClickOutsideHandler) {
      document.removeEventListener('click', this.handleClickPopupOutside)
      this.hasClickOutsideHandler = false
    }
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
      this.delayTimer = null
    }
  }

  isHoverToHideOrShow = () => this.props.action === ACTIONS[0]

  isClickToHideOrShow = () => this.props.action === ACTIONS[1]

  handleClickPopupOutside = (event) => {
    const { visible, onPopupVisibleChange } = this.props
    const target = event.target
    const trigger = this.triggerRef.current
    const popup = this.popupRef.current?.getElement()
    if (!visible) {
      return
    }

    if (trigger.contains(target)) {
      return
    }

    if (popup.contains(target)) {
      return
    }

    onPopupVisibleChange?.(false)
  }

  handleClickTrigger = () => {
    const { visible, onPopupVisibleChange } = this.props
    onPopupVisibleChange?.(!visible)
  }

  handleMouseEnterTrigger = () => {
    const { mouseEnterDelay } = this.props
    this.delaySetPopupVisible(true, mouseEnterDelay)
  }

  handleMouseLeaveTrigger = () => {
    const { mouseLeaveDelay } = this.props
    this.delaySetPopupVisible(false, mouseLeaveDelay)
  }

  // popup event handlers
  handleMouseEnterPopup = () => {
    this.clearDelayTimer()
  }

  handleMouseLeavePopup = () => {
    const { mouseLeaveDelay } = this.props
    this.delaySetPopupVisible(false, mouseLeaveDelay)
  }

  delaySetPopupVisible = (visible, ms) => {
    const { onPopupVisibleChange } = this.props
    this.delayTimer = setTimeout(() => onPopupVisibleChange?.(visible), ms)
  }

  clearDelayTimer = () => {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
    }
    this.delayTimer = null
  }

  getTriggerDomNode = () => {
    return this.triggerRef.current
  }

  renderPortal = () => {
    const {
      visible,
      alignConfig,
      getPopupContainer,
      popup,
      clsPrefix,
      popupClassName,
      popupStyle,
      transitionType,
      zIndex
    } = this.props
    const popupRef = this.popupRef

    // TODO:添加autoDestroy
    // if (
    //   !this.state.transitionVisible &&
    //   autoDestroy &&
    //   this.popupRef.current?.getElement()
    // ) {
    //   return null
    // }

    const popupMouseEvents = {}
    if (this.isHoverToHideOrShow()) {
      popupMouseEvents.onMouseEnter = this.handleMouseEnterPopup
      popupMouseEvents.onMouseLeave = this.handleMouseLeavePopup
    }

    return (
      <PortalWrapper
        getContainer={getPopupContainer}
        visible={visible}
        forceRender={false}
        locatedWrapper
        key='portal-wrapper'
      >
        <Popup
          visible={visible}
          clsPrefix={clsPrefix}
          target={this.getTriggerDomNode}
          transitionType={transitionType}
          alignConfig={alignConfig}
          popupClassName={popupClassName}
          ref={popupRef}
          popupStyle={popupStyle}
          zIndex={zIndex}
          {...popupMouseEvents}
        >
          {popup}
        </Popup>
      </PortalWrapper>
    )
  }

  render() {
    const { children } = this.props
    const triggerRef = this.triggerRef

    const triggerMouseEvents = {}
    if (this.isClickToHideOrShow()) {
      triggerMouseEvents.onClick = this.handleClickTrigger
    } else if (this.isHoverToHideOrShow()) {
      triggerMouseEvents.onMouseEnter = this.handleMouseEnterTrigger
      triggerMouseEvents.onMouseLeave = this.handleMouseLeaveTrigger
    }

    const trigger = cloneElement(children, {
      ref: composeRef(children.ref, triggerRef),
      key: 'trigger',
      ...triggerMouseEvents
    })

    const portal = this.renderPortal()

    return [trigger, portal]
  }
}

Trigger.propTypes = {
  clsPrefix: propTypes.string,
  action: propTypes.oneOf(ACTIONS),
  visible: propTypes.bool.isRequired,
  onPopupVisibleChange: propTypes.func.isRequired,
  mouseEnterDelay: propTypes.number,
  mouseLeaveDelay: propTypes.number,
  getPopupContainer: propTypes.func,
  popup: propTypes.element
}

export default Trigger
