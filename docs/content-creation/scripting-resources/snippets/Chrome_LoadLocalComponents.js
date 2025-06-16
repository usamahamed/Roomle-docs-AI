(async function() {
    const iframe = document.querySelector('iframe'); 
    let iframeContentWindow = null;
    if(!iframe) {
        await RoomleConfigurator.init('demoConfigurator','roomle-configurator','usm:frame', {
            __overrideServerUrl: 'https://www.roomle.com/t/configurator/'
        });
        iframeContentWindow = document.querySelector('iframe').contentWindow;
    } else {
        iframeContentWindow = document.querySelector('iframe').contentWindow;
        iframeContentWindow.RoomleConfigurator._plannerKernelAccess._kernelInstance.clearAll();
    }
    
    // CHANGE URLS TO WHAT YOU WANT TO LOAD
    const urls = [
        'http://127.0.0.1:5500/component1.json',
        'http://127.0.0.1:5500/examples/component2.json'
    ];

    const responses = await Promise.all(urls.map((url)=>fetch(url)))
    const components = await Promise.all(responses.map((response)=>response.text()));
    let lastComponentId = '';
    components.forEach((component) => {
        const cleanComponent = component.replace(/\r?\n|\r/g,'');
        iframeContentWindow.RoomleConfigurator._plannerKernelAccess._kernelInstance.loadComponentDefinition(10,cleanComponent);
        lastComponentId = JSON.parse(cleanComponent).id;
        console.log(`loaded ${lastComponentId} into kernel`);
    });

    RoomleConfigurator.loadConfiguration(`{"componentId":"${lastComponentId}"}`);

}());
