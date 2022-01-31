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
                'large_text': 'HaticoCoin',
				'small_image': 'small', 
                'small_text': 'NodeJs'
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

client.login({ 'clientId': '' }).catch((error) => process.exit(-1));
