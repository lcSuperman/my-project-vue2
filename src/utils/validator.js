export const checkUserName = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('账号不能为空'))
    }else{
      if(value == 'admin'){
        callback()
      }else{
        return callback(new Error('请输入正确的账号'))
      }
    }
  }
export  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('密码不能为空'))
    } else {
      if(value == '12345'){
        callback()
      }else{
        return callback(new Error('请输入正确的密码'))
      }
    }
  }