var Piece = function(config){
    this.position = config.position;
    this.color = config.color;
    if(this.position){
        this.render();        
    }    
}
Piece.prototype.move = function(targetPosition){
    console.log("Method not implemeted by: " + typeof(this));
}


Piece.prototype.attachListeners = function(){
    //To be implemented
}

Piece.prototype.render = function(){
    var row = this.position[0];
    var col = this.position[1];
    var element = document.querySelector(`[data-row="${row}"] [data-col="${col}"]`);
    if (element) {        
        // Create a new div element to represent the piece
        var pieceElement = document.createElement('div');
        
        // Add classes to the new element for styling
        pieceElement.classList.add('piece', this.color, this.type);
        
        // Clear any existing content in the cell
        element.innerHTML = '';
        
        // Append the new piece element to the cell
        element.appendChild(pieceElement);
        this.$el = pieceElement;
        this.attachListeners();
    } else {
        console.warn(`Element not found for position: ${this.position}`);
    }
}

Piece.prototype.kill = function(targetPiece){
    console.log("Method not implemeted by: " + typeof(this));
}