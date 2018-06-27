// Set the default theme
// 设置默认主题
JSONEditor.defaults.theme = 'html';

// Set the default template engine
// 设置默认模板引擎
JSONEditor.defaults.template = 'default';

// Default options when initializing JSON Editor
// 初始化JSON Editor的默认选项
JSONEditor.defaults.options = {};

// String translate function
// 字符串转换函数
JSONEditor.defaults.translate = function(key, variables) {
    var lang = JSONEditor.defaults.languages[JSONEditor.defaults.language];
    if (!lang) throw "Unknown language " + JSONEditor.defaults.language;

    var string = lang[key] || JSONEditor.defaults.languages[JSONEditor.defaults.default_language][key];

    if (typeof string === "undefined") throw "Unknown translate string " + key;

    if (variables) {
        for (var i = 0; i < variables.length; i++) {
            string = string.replace(new RegExp('\\{\\{' + i + '}}', 'g'), variables[i]);
        }
    }

    return string;
};

// Translation strings and default languages
// 翻译字符串和默认语言
JSONEditor.defaults.default_language = 'en';
JSONEditor.defaults.language = JSONEditor.defaults.default_language;
JSONEditor.defaults.languages.en = {
    /**
     * When a property is not set
     * 当一个属性没有设置时
     */
    //error_notset: "Property must be set",
    error_notset: "属性必须设置",
    /**
     * When a string must not be empty
     *     当一个字符串不能是空的
     */
    // error_notempty: "Value required",
    error_notempty: "属性必填",
    /**
     * When a value is not one of the enumerated values
     *     当值不是枚举值之一时
     */
    //error_enum: "Value must be one of the enumerated values",
    error_enum: "不支持的值",
    /**
     * When a value doesn't validate any schema of a 'anyOf' combination
     *     当一个值不验证任何“anyOf”组合的模式时
     */
    //error_anyOf: "Value must validate against at least one of the provided schemas",
    error_anyOf: "值必须对至少一个提供的模式进行验证",
    /**
     * When a value doesn't validate
     *     当一个值不验证时
     * @variables This key takes one variable: The number of schemas the value does not validate
     *     @variables 这个键接受一个变量：值不验证的模式的数量
     */
    //error_oneOf: 'Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.',
    error_oneOf: '值必须对所提供的模式之一进行验证。它现在验证模式的0。',
    /**
     * When a value does not validate a 'not' schema
     *     当一个值不验证“not”模式时
     */
    //: "Value must not validate against the provided schema",
    error_not: "值不能根据所提供的模式进行验证",
    /**
     * When a value does not match any of the provided types
     *     当一个值与所提供的任何类型不匹配时
     */
    //error_type_union: "Value must be one of the provided types",
    error_type_union: "值必须是提供的类型之一",
    /**
     * When a value does not match the given type
     *     当一个值与给定的类型不匹配时
     * @variables This key takes one variable: The type the value should be of
     *     @variables 这个键接受一个变量：值应该是什么类型
     */
    //error_type: "Value must be of type {{0}}",
    error_type: "值必须是 {{0}} 类型",
    /**
     *  When the value validates one of the disallowed types
     *      当值验证一个不允许的类型时
     */
    //error_disallow_union: "Value must not be one of the provided disallowed types",
    error_disallow_union: "值不应该是被提供的不允许的类型之一",
    /**
     *  When the value validates a disallowed type
     *      当值验证一个不允许的类型时
     * @variables This key takes one variable: The type the value should not be of
     *       @variables 这个键接受一个变量：值不应该是
     */
    error_disallow: "值不应该是 {{0}} 类型",
    /**
     * 当一个值不是一个倍数或者被一个给定的数整除时
     * @variables This key takes one variable: The number mentioned above
     */
    error_multipleOf: "Value must be a multiple of {{0}}",
    /**
     * When a value is greater than it's supposed to be (exclusive)
     * @variables This key takes one variable: The maximum
     */
    //error_maximum_excl: "Value must be less than {{0}}",
    error_maximum_excl: "必须小于 {{0}}",
    /**
     * When a value is greater than it's supposed to be (inclusive
     * @variables This key takes one variable: The maximum
     */
    //error_maximum_incl: "Value must be at most {{0}}",
    error_maximum_incl: "不能大于 {{0}}",
    /**
     * When a value is lesser than it's supposed to be (exclusive)
     * @variables This key takes one variable: The minimum
     */
    //error_minimum_excl: "Value must be greater than {{0}}",
    error_minimum_excl: "必须大于 {{0}}",
    /**
     * When a value is lesser than it's supposed to be (inclusive)
     * @variables This key takes one variable: The minimum
     */
    //error_minimum_incl: "Value must be at least {{0}}",
    error_minimum_incl: "必须大于或等于 {{0}}",
    /**
     * When a value have too many characters
     * @variables This key takes one variable: The maximum character count
     */
    //error_maxLength: "Value must be at most {{0}} characters long",
    error_maxLength: "输入的文字不能超过 {{0}} 个字符",
    /**
     * When a value does not have enough characters
     * @variables This key takes one variable: The minimum character count
     */
    //error_minLength: "Value must be at least {{0}} characters long",
    error_minLength: "至少要输入 {{0}} 个字符",
    /**
     * When a value does not match a given pattern
     */
    //error_pattern: "Value must match the pattern {{0}}",
    error_pattern: "您的输入不满足格式要求",
    /**
     * When an array has additional items whereas it is not supposed to
     */
    error_additionalItems: "No additional items allowed in this array",
    /**
     * When there are to many items in an array
     * @variables This key takes one variable: The maximum item count
     */
    error_maxItems: "Value must have at most {{0}} items",
    /**
     * When there are not enough items in an array
     * @variables This key takes one variable: The minimum item count
     */
    error_minItems: "Value must have at least {{0}} items",
    /**
     * When an array is supposed to have unique items but has duplicates
     */
    error_uniqueItems: "Array must have unique items",
    /**
     * When there are too many properties in an object
     * @variables This key takes one variable: The maximum property count
     */
    error_maxProperties: "Object must have at most {{0}} properties",
    /**
     * When there are not enough properties in an object
     * @variables This key takes one variable: The minimum property count
     */
    error_minProperties: "Object must have at least {{0}} properties",
    /**
     * When a required property is not defined
     * @variables This key takes one variable: The name of the missing property
     */
    error_required: "Object is missing the required property '{{0}}'",
    /**
     * When there is an additional property is set whereas there should be none
     * @variables This key takes one variable: The name of the additional property
     */
    error_additional_properties: "No additional properties allowed, but property {{0}} is set",
    /**
     * When a dependency is not resolved
     * @variables This key takes one variable: The name of the missing property for the dependency
     */
    error_dependency: "Must have property {{0}}",
    /**
     * Text on Delete All buttons
     */
    button_delete_all: "All",
    /**
     * Title on Delete All buttons
     */
    button_delete_all_title: "删除所有",
    /**
     * Text on Delete Last buttons
     * @variable This key takes one variable: The title of object to delete
     */
    button_delete_last: "Last {{0}}",
    /**
     * Title on Delete Last buttons
     * @variable This key takes one variable: The title of object to delete
     */
    button_delete_last_title: "删除最后一行",
    /**
     * Title on Add Row buttons
     * @variable This key takes one variable: The title of object to add
     */
    button_add_row_title: "新增行",
    /**
     * Title on Move Down buttons
     */
    button_move_down_title: "下移",
    /**
     * Title on Move Up buttons
     */
    button_move_up_title: "上移",
    /**
     * Title on Delete Row buttons
     * @variable This key takes one variable: The title of object to delete
     */
    button_delete_row_title: "删除 {{0}}",
    /**
     * Title on Delete Row buttons, short version (no parameter with the object title)
     */
    button_delete_row_title_short: "删除",
    /**
     * Title on Collapse buttons
     */
    button_collapse: "Collapse",
    /**
     * Title on Expand buttons
     */
    button_expand: "Expand"
};

// Miscellaneous Plugin Settings
JSONEditor.plugins = {
    ace: {
        theme: ''
    },
    epiceditor: {

    },
    sceditor: {

    },
    select2: {

    },
    selectize: {}
};

// Default per-editor options
$each(JSONEditor.defaults.editors, function(i, editor) {
    JSONEditor.defaults.editors[i].options = editor.options || {};
});

// Set the default resolvers
// Use "multiple" as a fall back for everything
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (typeof schema.type !== "string") return "multiple";
});
// If the type is not set but properties are defined, we can infer the type is actually object
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // If the schema is a simple type
    if (!schema.type && schema.properties) return "object";
});
// If the type is set and it's a basic type, use the primitive editor
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // If the schema is a simple type
    if (typeof schema.type === "string") return schema.type;
});
// Boolean editors
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema.type === 'boolean') {
        // If explicitly set to 'checkbox', use that
        if (schema.format === "checkbox" || (schema.options && schema.options.checkbox)) {
            return "checkbox";
        }
        // Otherwise, default to select menu
        return (JSONEditor.plugins.selectize.enable) ? 'selectize' : 'select';
    }
});
// Use the multiple editor for schemas where the `type` is set to "any"
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // If the schema can be of any type
    if (schema.type === "any") return "multiple";
});
// Editor for base64 encoded files
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // If the schema can be of any type
    if (schema.type === "string" && schema.media && schema.media.binaryEncoding === "base64") {
        return "base64";
    }
});
// Editor for uploading files
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema.type === "string" && schema.format === "url" && schema.options && schema.options.upload === true) {
        if (window.FileReader) return "upload";
    }
});
// Use the table editor for arrays with the format set to `table`
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // Type `array` with format set to `table`
    if (schema.type == "array" && schema.format == "table") {
        return "table";
    }
});
// Use the `select` editor for dynamic enumSource enums
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema.enumSource) return (JSONEditor.plugins.selectize.enable) ? 'selectize' : 'select';
});
// Use the `enum` or `select` editors for schemas with enumerated properties
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema["enum"]) {
        if (schema.type === "array" || schema.type === "object") {
            return "enum";
        } else if (schema.type === "number" || schema.type === "integer" || schema.type === "string") {
            return (JSONEditor.plugins.selectize.enable) ? 'selectize' : 'select';
        }
    }
});
// Specialized editors for arrays of strings
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema.type === "array" && schema.items && !(Array.isArray(schema.items)) && schema.uniqueItems && ['string', 'number', 'integer'].indexOf(schema.items.type) >= 0) {
        // For enumerated strings, number, or integers
        if (schema.items.enum) {
            return 'multiselect';
        }
        // For non-enumerated strings (tag editor)
        else if (JSONEditor.plugins.selectize.enable && schema.items.type === "string") {
            return 'arraySelectize';
        }
    }
});
// Use the multiple editor for schemas with `oneOf` set
JSONEditor.defaults.resolvers.unshift(function(schema) {
    // If this schema uses `oneOf` or `anyOf`
    if (schema.oneOf || schema.anyOf) return "multiple";
});

//Instruct the json-editor to use the custom datetime-editor.
JSONEditor.defaults.resolvers.unshift(function(schema) {
    if (schema.type === "string" && schema.format === "datetime") {
        return "datetime";
    }
});