const config = {
    app_name: 'WonderlandWitches',
    app_description: 'WonderLandWitches is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: '_metadata.json',
    collection_contract_address: '0x88f4dCaadE129eE1A914731A96E98b84b88DfEBe',
    collection_name: '500 WonderlandWitches',
    collection_description: 'WonderlandWitches is a multichain NFT consisting of 2500 unique Witches. Mint and stake your Witches on FTM, Avax or Polygon to earn $WAND. Use $WAND to gain access to a private website which will hold a whole host of web3 education content, introduction to building a web3 project, alpha calls, daily technical analysis and much more… The Wizards and Witches are here to revolutionise web3 education and education as whole using NFT technology',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database_wonderland_wizards.sqlite',
    ga: '',
    main_og_image: 'https://gateway.pinata.cloud/ipfs/bafkreia4bnfuesb5avcguydutexgy6o7djhj5f4a5bqk62na4ikfvmqyyy',
    item_path_name: 'wizard',
    page_item_num: 20,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: true
};

module.exports = config;
