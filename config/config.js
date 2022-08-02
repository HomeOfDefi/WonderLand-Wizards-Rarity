const config = {
    app_name: 'Wonderland Wizards',
    app_description: 'WonderLand Wizards is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: '_metadata.json',
    collection_contract_address: '0x8bef954862d333fbcceadd66048565db283c96ff',
    collection_name: '5k Wonderland Wizards',
    collection_description: 'WonderlandWizards is a collection of 1000 wizards on the Ethereum blockchain designed to bring holders rewards weekly',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database_wonderland_wizards.sqlite',
    ga: '',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'punk',
    page_item_num: 20,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: true
};

module.exports = config;