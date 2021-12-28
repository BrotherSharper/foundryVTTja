
/**
Hooks.on("preUpdateActor", (data, updatedData) =>{
    if (data.data.token.img == "modules/foundryVTTja/img/mystery-man.svg" && updatedData.img)
    {
      updatedData["token.img"] = updatedData.img;
      data.data.token.img = updatedData.img;
    }
  })
**/
  
  /**
   * Set default values for new actors' tokens
   */
  Hooks.on("preCreateActor", (createData) =>{ 
    // Set custom default token
    if (!createData.img)
      createData.img = "modules/foundryVTTja/img/mystery-man.svg"
  })

  Hooks.once('libChangelogsReady', function() {
    libChangelogs.registerConflict("foundryVTTja", "jpfoundryvtt","オンセ工房 Foundry VTT日本語コミュニティがサポートしていない本体日本語化Modが検出されました。オンセ工房が正しく機能しない恐れがありますのでいずれかを無効化してください。","critical")
})