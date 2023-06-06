var APP_DATA = {
  "scenes": [
    {
      "id": "0-view2",
      "name": "view2",
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
          "yaw": -0.35014137390782807,
          "pitch": 0.19441840247213804,
          "rotation": 3.141592653589793,
          "target": "1-view1"
        },
        {
          "yaw": -1.7077178752111788,
          "pitch": 0.12168086135579159,
          "rotation": 3.141592653589793,
          "target": "3-dining-table"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view1",
      "name": "view1",
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
          "yaw": 0.7962099336598438,
          "pitch": 0.1591418015090582,
          "rotation": 3.141592653589793,
          "target": "3-dining-table"
        },
        {
          "yaw": -0.36206250605888,
          "pitch": 0.25180359801016117,
          "rotation": 3.141592653589793,
          "target": "0-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pantry",
      "name": "pantry",
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
          "yaw": -0.663617600355213,
          "pitch": 0.07840798243882219,
          "rotation": 4.71238898038469,
          "target": "1-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-table",
      "name": "dining table",
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
          "yaw": 2.132980295856015,
          "pitch": 0.1454420212252927,
          "rotation": 3.141592653589793,
          "target": "1-view1"
        },
        {
          "yaw": 2.8467810981817214,
          "pitch": 0.33687254960219093,
          "rotation": 3.141592653589793,
          "target": "0-view2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "double galley",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
