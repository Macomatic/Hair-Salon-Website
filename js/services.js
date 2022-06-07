const serviceDescriptions = ["Select a service to see its information", 
                            "Description: Your hair will be cut to the desired length and will be simply styled<br/>Price: $25",
                            "Description: You can get any version of a fade (mid-fade, skin-fade, etc)<br/>Price: $30",
                            "Description: Your hair will be cut and you will also have your hair washed, dryed, and styled<br/>Price: $35",
                            "Description: Your hair will be outlined, trimmed, and shaped to appear cleaner<br/>Price: $25",
                            "Description: Your beard will be outlined for a sharper appearance<br/>Price: $20",
                            "Description: You will get mini highlights in your hair of the color of your choice<br/>Price: $30",
                            "Description: You will get partial highlights in your hair of the color of your choice<br/>Price: $40",
                            "Description: You will get a full hair recolor of the color of your choice<br/>Price: $60",
                            "Description: You will get a ombre-style hair coloring (dark colored roots to a bright color at the hair tips)<br/>Price: $80",
                            "Description: If the color of your dyed hair has been fading, your hair's color will be restored to the desired shade<br/>Price: $30",
                            "Description: Not for sure about what you want? Choose this option and when you come to the salon, we can go over some options that we recommend based on your hair!<br/>Price: N/A"
]

function update() {
    var servicesMenu = document.getElementById('services');
    var index = servicesMenu.selectedIndex;
    var serviceFullName = servicesMenu.options[servicesMenu.selectedIndex].text;
    document.getElementById('serviceName').innerHTML = serviceFullName;
    document.getElementById('serviceDescription').innerHTML = serviceDescriptions[index];
}

function onLoad() {
    localStorage.clear();
}