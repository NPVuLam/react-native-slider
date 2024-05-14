var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _index=_interopRequireDefault(require("./index"));var _StepsIndicator=require("./components/StepsIndicator");var _styles=require("./utils/styles");var _constants=require("./utils/constants");var _jsxRuntime=require("react/jsx-runtime");var _excluded=["onValueChange","onSlidingStart","onSlidingComplete","onAccessibilityAction"];var _this=this,_jsxFileName="/Users/vulam/workspace/react-native-slider/package/src/Slider.tsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var SliderComponent=function SliderComponent(props,forwardedRef){var _props$value,_props$accessibilityS;var onValueChange=props.onValueChange,onSlidingStart=props.onSlidingStart,onSlidingComplete=props.onSlidingComplete,onAccessibilityAction=props.onAccessibilityAction,localProps=(0,_objectWithoutProperties2.default)(props,_excluded);var _useState=(0,_react.useState)((_props$value=props.value)!=null?_props$value:props.minimumValue),_useState2=(0,_slicedToArray2.default)(_useState,2),currentValue=_useState2[0],setCurrentValue=_useState2[1];var _useState3=(0,_react.useState)(0),_useState4=(0,_slicedToArray2.default)(_useState3,2),width=_useState4[0],setWidth=_useState4[1];var options=Array.from({length:(localProps.maximumValue-localProps.minimumValue)/(localProps.step?localProps.step:_constants.constants.DEFAULT_STEP_RESOLUTION)+1},function(_,index){return index;});var defaultStyle=_reactNative.Platform.OS==='ios'?_styles.styles.defaultSlideriOS:_styles.styles.defaultSlider;var sliderStyle={zIndex:1,width:width};var style=_reactNative.StyleSheet.compose(props.style,defaultStyle);var onValueChangeEvent=function onValueChangeEvent(event){onValueChange&&onValueChange(event.nativeEvent.value);setCurrentValue(event.nativeEvent.value);};var _disabled=typeof props.disabled==='boolean'?props.disabled:((_props$accessibilityS=props.accessibilityState)==null?void 0:_props$accessibilityS.disabled)===true;var _accessibilityState=typeof props.disabled==='boolean'?Object.assign({},props.accessibilityState,{disabled:props.disabled}):props.accessibilityState;var onSlidingStartEvent=onSlidingStart?function(event){onSlidingStart(event.nativeEvent.value);}:null;var onSlidingCompleteEvent=onSlidingComplete?function(event){onSlidingComplete(event.nativeEvent.value);}:null;var onAccessibilityActionEvent=onAccessibilityAction?function(event){onAccessibilityAction(event);}:null;var value=Number.isNaN(props.value)||!props.value?undefined:props.value;var lowerLimit=!!localProps.lowerLimit||localProps.lowerLimit===0?localProps.lowerLimit:_reactNative.Platform.select({web:localProps.minimumValue,default:_constants.constants.LIMIT_MIN_VALUE});var upperLimit=!!localProps.upperLimit||localProps.upperLimit===0?localProps.upperLimit:_reactNative.Platform.select({web:localProps.maximumValue,default:_constants.constants.LIMIT_MAX_VALUE});return(0,_jsxRuntime.jsxs)(_reactNative.View,{onLayout:function onLayout(event){setWidth(event.nativeEvent.layout.width);},style:[_styles.styles,style,{justifyContent:'center'}],children:[props.StepMarker||!!props.renderStepNumber?(0,_jsxRuntime.jsx)(_StepsIndicator.StepsIndicator,{options:options,sliderWidth:width,currentValue:currentValue,renderStepNumber:localProps.renderStepNumber,thumbImage:localProps.thumbImage,StepMarker:localProps.StepMarker,isLTR:localProps.inverted}):null,(0,_jsxRuntime.jsx)(_index.default,Object.assign({},localProps,{value:value,lowerLimit:lowerLimit,upperLimit:upperLimit,accessibilityState:_accessibilityState,thumbImage:_reactNative.Platform.OS==='web'?props.thumbImage:props.StepMarker?undefined:_reactNative.Image.resolveAssetSource(props.thumbImage),ref:forwardedRef,style:[sliderStyle,defaultStyle,{alignContent:'center',alignItems:'center'}],onChange:onValueChangeEvent,onRNCSliderSlidingStart:onSlidingStartEvent,onRNCSliderSlidingComplete:onSlidingCompleteEvent,onRNCSliderValueChange:onValueChangeEvent,disabled:_disabled,onStartShouldSetResponder:function onStartShouldSetResponder(){return true;},onResponderTerminationRequest:function onResponderTerminationRequest(){return false;},onRNCSliderAccessibilityAction:onAccessibilityActionEvent,thumbTintColor:props.thumbImage&&!!props.StepMarker?'transparent':props.thumbTintColor}))]});};var SliderWithRef=_react.default.forwardRef(SliderComponent);SliderWithRef.defaultProps={value:0,minimumValue:0,maximumValue:1,step:0,inverted:false,tapToSeek:false,lowerLimit:_reactNative.Platform.select({web:undefined,default:_constants.constants.LIMIT_MIN_VALUE}),upperLimit:_reactNative.Platform.select({web:undefined,default:_constants.constants.LIMIT_MAX_VALUE})};var _default=exports.default=SliderWithRef;