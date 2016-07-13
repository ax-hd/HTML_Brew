var convertButton = document.getElementById("btn-convert");

convertButton.addEventListener("click", function(){
    
});

var HtmlParser = function(){
    return this;
}

HtmlParser.prototype = {
    _stack: [],
    _index:0,
    __code:"",
    ___codeArr:[],
    _domTree: new DOMTree(),
    processInputAt: function(index){
        this.___codeArr = this.__code.split('');
        if(this.___codeArr.length > 0){
            while(this._index<this.___codeArr.length){
                if(this.___codeArr[this._index]==='<' && this.___codeArr[this._index] !== '/'){
                    this._index++;
                    this.beginElementStart();
                }
            }
        }
        
    },
    parse:function(){
        
    },
    beginElementStart: function(){
        var element = new DomTreeNode();
        while(this.___codeArr[this._index] !== '>'){
            while(this.___codeArr[this._index] === ' ') { this._index++;}
            startAttributeNameForElement(element);
        } 
    },
    beginElementEnd: function(){
        
    },
    endElementStart: function(){
        
    },
    endElementEnd: function(){
        
    },
    startAttributeNameForElement: function(element){
        while(this.___codeArr[this._index] !== '=' || this.___codeArr[this._index] !== ' '){
            var elementAttribute += this.___codeArr[this._index];
            this._index++;
        }
        while(this.___codeArr[this._index] !== '='){
           this._index++; 
        }
        element.attrs.push(elementAttribute);
        startAttributeValueForElement(element, elementAttribute)
    },
    endAttributeNameForElement: function(){
        
    },
    startAttributeValueForElement: function(){
        
    },
    endAttributeValueForElement: function(){
        
    },
    
    
};

var DomTree = function(){
    return this;
}

DomTree.prototype = {
    _root: {}
};

var DomTreeNode = function(){
    return this;
}

DomTreeNode.prototype = {
    _tag:undefined,
    _attributes:[],
    parent:undefined,
    children:[]
}

var ElementAttributes = function(){
  return this;  
};

ElementAttributes.prototype = {
    attributeName="",
    attributeValue=""
}