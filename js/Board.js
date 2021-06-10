class Board {

  constructor(){
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }
 
//  Generates 2D array of spaces. 
//  @return  {Array}     An array of space objects
  createSpaces(){
    const spaces = [];

    for(let i = 0; i < this.columns; i++){
      const column = [];

      for(let j = 0; j < this.rows; j++){
        let space = new Space(i, j);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }

  drawHTMLBoard(){
    // Use a for-loop or a for-of-loop to iterate through the 2D array of space objects stored 
    // in the Board object's spaces property, and call the newly created drawSVGSpace() 
    // method on each space object.
    for(let column of this.spaces){
      for(let space of column){
        space.drawSVGSpace();
      }
    }
  }
}