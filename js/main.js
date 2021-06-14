
Hooks.on("preUpdateActor", (data, updatedData) =>{
    if (data.data.token.img == "modules/foundryVTTja/img/mystery-man.svg" && updatedData.img)
    {
      updatedData["token.img"] = updatedData.img;
      data.data.token.img = updatedData.img;
    }
  })
  
  
  /**
   * Set default values for new actors' tokens
   */
   /**
  Hooks.on("preCreateActor", (createData) =>{ 
    // Set custom default token
    if (!createData.img)
      createData.img = "modules/foundryVTTja/img/mystery-man.svg"
  })
 */