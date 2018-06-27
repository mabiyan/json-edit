/*jshint loopfunc: true */
/* 简单的JavaScript继承
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// 受到base2和Prototype的启发
var Class;
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){window.postMessage("xyz");}) ? /\b_super\b/ : /.*/;
 
  // The base Class implementation (does nothing)
  // 基类实现（什么都不做）
  Class = function(){};
 
  // Create a new Class that inherits from this class
  // 创建一个继承自该类的新类
  Class.extend = function extend(prop) {
    var _super = this.prototype;
   
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    // 实例化一个基类（但只创建实例，
    // 不要运行init构造器）
    initializing = true;
    var prototype = new this();
    initializing = false;
   
    // Copy the properties over onto the new prototype
    // 将属性复制到新原型上
    for (var name in prop) {
      // Check if we're overwriting an existing function
      // 检查我们是否在重写现有的函数
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
           
            // Add a new ._super() method that is the same method
            // but on the super-class
            // 添加一个新的.super（）方法，它是相同的方法，
            // 但是在超级类上
            this._super = _super[name];
           
            // The method only need to be bound temporarily,
            //  so we remove it when we're done executing
            // 这个方法只需要临时绑定，
            // 所以当我们执行的时候，我们就删除它
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
           
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
   
    // The dummy class constructor
    // 虚拟类构造函数
    function Class() {
      // All construction is actually done in the init method
      // 所有的构建都是在init方法中完成的
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
   
    // Populate our constructed prototype object
    // 填充我们构建的原型对象
    Class.prototype = prototype;
   
    // Enforce the constructor to be what we expect
    // 执行构造函数，使之成为我们所期望的
    Class.prototype.constructor = Class;
 
    // And make this class extendable
    // 使这个类可扩展
    Class.extend = extend;
   
    return Class;
  };
  
  return Class;
})();
