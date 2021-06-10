class Player {
  // How will you differentiate between player objects? Will players have a name, or an ID? How would an ID be created or set?
  //Player ID isn't dynamic, so we can set it as a property of the object 
  // How will a player's tokens be stored? How many tokens should each player have? How will you store or set that number?
  //This is also a set number. We can store it as a property. 
  // How will each player's tokens be differentiated from the other player's, visually?
  //Each player's tokens will have a different color. We can set this dynamically with a setter
  // What are some ways to keep track of whose turn it is?
  //We can set each player's turn dynamically with a setter, too. Or a getter, maybe? Not sure

  constructor(name, id, color, active){
    this.name = name;
    this.id = id;
    this.color = color;
    //will originally be false for active
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  get unusedTokens(){
    return this.tokens.filter(token => !token.dropped);
  }

  get activeToken(){
    return this.unusedTokens[0];
  }

// 
//  Creates token objects for player
//  @param   {integer}   num - Number of token objects to be created
//  @return  {array}     tokens - an arary of new token objects
// 

  createTokens(num){
    const tokens = [];

    for(let i = 1; i <= num; i++){
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }

  /**
 * Check if a player has any undropped tokens left
 * @return {Boolean} 
 */
  checkTokens(){
    return this.unusedTokens.length == 0 ? false : true;
  }
}