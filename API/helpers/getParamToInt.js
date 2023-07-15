function getParamToInt(params){
  let {curso} = params;

  return parseInt(curso)
}

module.exports = getParamToInt