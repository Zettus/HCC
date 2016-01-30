export default {
    openHabURL: "192.168.1.67:8080",
    items: [
        {name: 'Temp_ist_EG_Wohnzimmer', label: 'Wohnzimmer', boxType: 'sensor', format: '%.1f°'},
        {name: 'Temp_ist_Aussen_MQTT1', label: 'Bett', boxType: 'sensor', format: '%.1f°'},
        {name: 'LEDSwitch', label: 'LED Switch', boxType: 'switch'}
    ]
}