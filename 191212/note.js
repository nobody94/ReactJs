const disabledInfo = {...this.state.ingredients};
for (let key in disabledInfo){
    disabledInfo[key] = (disabledInfo[key] <= 0)
    //disabledInfo[key] <= 0 ? true : false
}