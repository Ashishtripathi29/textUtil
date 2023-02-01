function Alert(props) {
    function toType(type){
        let t=type.toLowerCase()
        return t.charAt(0).toUpperCase()+t.slice(1)
    }
   return  <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
      <strong>{toType(props.alert.type)}</strong> {props.alert.msg}

      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  */}
     </div>
}
     </div>
}
export default Alert