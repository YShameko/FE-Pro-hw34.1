"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/pages/main/Main.jsx":
/*!*********************************!*\
  !*** ./src/pages/main/Main.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_locale_uk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/locale/uk */ "./node_modules/dayjs/locale/uk.js");
/* harmony import */ var dayjs_locale_uk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_uk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/esm/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _main_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main.style.css */ "./src/pages/main/main.style.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_11__.useFormik)({
    initialValues: {
      destination: '',
      checkIn: null,
      checkOut: null,
      adults: '',
      children: ''
    },
    validate: function validate(values) {
      var _values$checkIn, _values$checkOut, _values$checkIn2, _values$checkOut2;
      var errors = {};
      if (!values.destination) {
        errors.destination = 'Can not be empty';
      }
      if (!values.checkIn) {
        errors.checkIn = 'Can not be empty';
      }
      if (!values.checkOut) {
        errors.checkOut = 'Can not be empty';
      }
      if (((_values$checkIn = values.checkIn) === null || _values$checkIn === void 0 ? void 0 : _values$checkIn.toDate()) < new Date()) {
        errors.checkIn = 'Past dates are not allowed';
      }
      if (((_values$checkOut = values.checkOut) === null || _values$checkOut === void 0 ? void 0 : _values$checkOut.toDate()) < new Date()) {
        errors.checkOut = 'Past dates are not allowed';
      }
      if (((_values$checkIn2 = values.checkIn) === null || _values$checkIn2 === void 0 ? void 0 : _values$checkIn2.toDate()) > ((_values$checkOut2 = values.checkOut) === null || _values$checkOut2 === void 0 ? void 0 : _values$checkOut2.toDate())) {
        errors.checkOut = 'Can not set date before check-in date';
      }
      if (!values.adults || values.adults < 1 || !Number.isInteger(values.adults)) {
        errors.adults = 'Invalid number';
      }
      if (values.children && (values.children < 0 || !Number.isInteger(values.children))) {
        errors.children = 'Invalid number';
      }
      return errors;
    },
    onSubmit: function onSubmit(values) {
      // dispatch()
      navigate('/hotels');
      // alert(JSON.stringify(values, null, 2));
    }
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    destinations = _useState2[0],
    setDestinations = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)('/hotels');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('https://yshameko.free.beeceptor.com/destination').then(function (resp) {
      setDestinations(resp.data);
      setError(null);
    })["catch"](function (err) {
      console.error("Could not get data from the server:", err);
      setError("Could not get data from the server");
      setDestinations([{
        id: 'dest-error',
        label: 'Error: Could not download the destinations'
      }]);
    });
  }, []);
  var onDestChanged = function onDestChanged(e) {
    var newValue = destinations.find(function (d) {
      return d.id === e.target.value;
    });
    formik.setFieldValue('destination', newValue === null || newValue === void 0 ? void 0 : newValue.id);
  };
  var handleChange = function handleChange(newValue, fieldName) {
    formik.setFieldValue(fieldName, newValue);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Destination",
    className: "dest-select",
    name: "destination",
    value: formik.values.destination,
    onChange: onDestChanged
  }, destinations.map(function (dest) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: dest.id,
      value: dest.id
    }, " ", dest.label, " ");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formik.errors.destination)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_8__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__.AdapterDayjs,
    adapterLocale: "uk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__.DatePicker, {
    label: "Check-in date",
    value: formik.values.checkIn,
    onChange: function onChange(val) {
      return handleChange(val, 'checkIn');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formik.errors.checkIn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_8__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__.AdapterDayjs,
    adapterLocale: "uk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__.DatePicker, {
    label: "Check-out date",
    value: formik.values.checkOut,
    onChange: function onChange(val) {
      return handleChange(val, 'checkOut');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formik.errors.checkOut)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Adults",
    variant: "outlined",
    className: "persons-qty",
    name: "adults",
    value: formik.values.adults,
    onChange: formik.handleChange,
    type: "number",
    min: "1",
    step: "1",
    InputProps: {
      inputProps: {
        min: 1,
        step: 1
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formik.errors.adults)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "number",
    label: "Children",
    variant: "outlined",
    className: "persons-qty",
    name: "children",
    value: formik.values.children,
    onChange: formik.handleChange,
    min: "0",
    step: "1",
    InputProps: {
      inputProps: {
        min: 0,
        step: 1
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formik.errors.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    variant: "contained",
    color: "warning",
    size: "large"
  }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Travel With Booking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum error dignissimos in fugiat quia amet molestias obcaecati facilis fuga tempore accusantium, tenetur ipsam quisquam tempora debitis eaque pariatur quaerat nihil."));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1209dc0a9f9838088e43")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4b3590f0e11fe91be946.hot-update.js.map