var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14436561172877305,
        "pitch": 0.09083955087047002,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -0.06820224520160423,
          "pitch": -0.2286053659865761,
          "rotation": 7.0685834705770345,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17822035231082722,
          "pitch": 0.21722145519414404,
          "title": "Welcome",
          "text": "Faculty of Engineering&nbsp;"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.7834118668852064,
        "pitch": 0.044817811742639435,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.9717186642355493,
          "pitch": 0.06884664602232249,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0743538792854839,
          "pitch": -0.06307686501222598,
          "title": "Cafe",
          "text": "F&amp;B"
        },
        {
          "yaw": 1.0427741538645243,
          "pitch": 0.08782846447937231,
          "title": "Study Spot",
          "text": "Free seating tables and chair"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.9759599620267139,
        "pitch": 0.058669385886471304,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.07984327405846514,
          "pitch": -0.005047433351228037,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7548107585783228,
          "pitch": 0.04202833765177871,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1846346833833206,
          "pitch": -0.3685704281889599,
          "title": "Sculpture",
          "text": "Spiral&nbsp;"
        }
      ]
    }
  ],
  "name": "Engineering Walkthrough",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
