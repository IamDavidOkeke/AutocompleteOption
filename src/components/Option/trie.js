const Node = function(){
    this.keys = new Map()
    this.end = false;
    this.isEnd = function(){
        return this.end
    }
    this.setEnd = function(){
         this.end = true
         return
    }
}

const Trie = function(){
    this.root = new Node()

    this.add = function(input, node = this.root){
        if (input.length == 0){
            node.setEnd()
            return
        }
        else if(!node.keys.has(input[0])){
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
        else{
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }
    this.isWord = function(word){
        var node = this.root
        while (word.length > 1){
            if(!node.keys.has(word[0])){
                return false
            }
            else{
                node = node.keys.get(word[0])
                word = word.substr(1);
            }
        }
        return (node.keys.has(word[0]) && node.keys.get(word[0]).isEnd) ? true : false
    }

    this.getWord = function(word){
        var node = this.root
        var collection = []
        var words = new String()
        while (word.length > 1){
            if(!node.keys.has(word[0])){
                return false
            }
            else{
                words+=word[0]
                node = node.keys.get(word[0])
                word = word.substr(1);
            }
        }
       if (node.keys.has(word[0])){
           words+=word[0]
           var node =  node.keys.get(word[0])
           var getRest = function(node, string ){
            if(node.end == true){
                collection.push(string)
            }
            if(node.keys.size > 0){ 
                for ( let nodes of node.keys.keys()){
                    getRest(node.keys.get(nodes), string.concat(nodes))
                }
                
            }else {
              return
            }
           }
           getRest(node, words)
       } 
       return collection
    }
    this.build = function(array){
        for (var i = 0; i < array.length; i++){
            this.add(array[i])
        }
    }
}


export default Trie