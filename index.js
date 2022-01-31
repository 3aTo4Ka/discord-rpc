const RPC = require("discord-rpc"),
    client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    console.log('Приложение запущено!');
    client.request('SET_ACTIVITY', {
        'pid': process.pid,
        'activity': {
            'details': 'Discord Bot',
            'assets': {
                'large_image': 'top',
                'large_text': '<image_key>',
				'small_image': 'small', 
                'small_text': '<image_key>'
            },
            'buttons': [
                {
                    'label': 'VK',
                    'url': 'https://vk.com/3ato4'
                },{
                    'label': 'Discord Bot',
                    'url': 'http://haticocoin.xyz/'
                }
            ]
        }
    });
});

client.login({
    'clientId': '<client_id>'
}).catch( ( error ) => {
    process.exit(-1)
});
