var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-reunio",
      "name": "Sala de Reunião",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.80620979257621,
          "pitch": 0.7495275572991069,
          "rotation": 0,
          "target": "2-banheiro-360"
        },
        {
          "yaw": 3.0328354222887146,
          "pitch": 0.9895437067810899,
          "rotation": 0,
          "target": "1-escritrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-escritrio",
      "name": "Escritório",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0644206568935637,
          "pitch": 0.6561178106776424,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        },
        {
          "yaw": 1.4670813952724435,
          "pitch": 0.7334861439354725,
          "rotation": 0,
          "target": "3-banheiro-360-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banheiro-360",
      "name": "banheiro 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.82537437375783,
          "pitch": 0.8209126538002351,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro-360-2",
      "name": "banheiro 360-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.521745399087159,
          "pitch": 1.2537165494810338,
          "rotation": 0,
          "target": "1-escritrio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
