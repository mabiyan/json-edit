JSONEditor.defaults.editors.datetime = JSONEditor.defaults.editors.string.extend({
    getValue: function() {
        //获取datetimePicker对象
        var d = window.jQuery(this.input).data("DateTimePicker");
        if(d&&d.date()){
            //获取毫秒数
            var time = d.date().format(this.options.datetimeType);
            return time;
        }
        return this.value;
    },

    setValue: function(val) {
        var d = window.jQuery(this.input).data("DateTimePicker");
        if(d){
            var tv = this.value;
            if(tv !== val){
                d.date(val);
                this.value = val;
            }
        }
    },

    build: function() {
        this._super();
        var self = this;
        //defaultDate = new Date();
        window.jQuery(self.input).datetimepicker({
                format: self.options.datetimeType,
                //defaultDate: defaultDate,
                locale: 'zh-cn'
            })
            .on('dp.change', function(e) {
                self.refreshValue();
                self.onChange(true);
                self.showValidationErrors();
            });
    }
});