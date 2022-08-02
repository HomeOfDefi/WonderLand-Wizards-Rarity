const config = {
    app_name: 'WonderLand Wizzards',
    app_description: 'WonderLand Wizzards is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: '_metadata.json',
    collection_contract_address: '0x8bef954862d333fbcceadd66048565db283c96ff',
    collection_name: '5k Wonderland Wizzards',
    collection_description: '5k "One Day I\'ll Be A Punk"-punks – a homage to the one and only Wonderland Wizzards. Holding a OneDayPunk will give you early access to PunkScapes and reserve a profile on the PunkScape website.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database_wonderland_wizzards.sqlite',
    ga: '',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'punk',
    page_item_num: 20,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: true
};

module.exports = config;