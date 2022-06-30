//数组内根据对象属性排序的方法  this.editableTabs.sort(this.compare('number'));
export function compare(property) {
    return function (obj1, obj2) {
        let value1 = obj1[property];
        let value2 = obj2[property];
        return value1 - value2;     // 升序
    }
}