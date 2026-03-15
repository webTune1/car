// ============================================================
// 🚗 MAHINDRA CARS DATABASE - EASY EDIT VERSION
// ============================================================
// Edit this file to change car data, prices, engines, features
// ============================================================

const mahindraData = [
    // ============================================================
    // MODEL 1: BOLERO
    // ============================================================
    {
        id: 'bolero',
        name: 'Bolero',
        icon: 'fas fa-cube',
        subtitle: '1493cc Diesel | 7-Seater',
        variants: [
            // VARIANT: B4
            {
                id: 'B4',
                name: 'B4',
                price: '₹7.99 Lakh',
                engine: { type: '1493cc Diesel', power: '74.9 bhp', torque: '210 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Steel wheels',],
                    'Interior': ['Manual AC/Heater', 'Power steering', 'Vinyl Seat', 'Manual windows'],
                    'Safety': ['Driver and co-driver Airbags', 'ABS', 'Reverse parking sensors','Seat Belt Reminder'],
                    //'Tech': ['No infotainment', 'USB connectivity', 'Basic system']
                }
            },
            // VARIANT: B6
            {
                id: 'B6',
                name: 'B6',
                price: '₹8.69 - 8.79 Lakh',
                engine: { type: '1493cc Diesel', power: '74.9 bhp', torque: '210 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Steel wheels', 'Wheel Caps', 'Power Windows','Central Locking',],
                    'Interior': ['Music', 'Touchscreen Infotainment System', 'Steering Mounted Audio Controls','Fabric Seats'],
                    'Safety': ['Driver and co-driver Airbags', 'ABS', 'Reverse parking sensors','Seat Belt Reminder'],
                    'Extra': ['Audio system','Power Windows']
                }
            },


            // VARIANT: B6(O)
            {
                id: 'B6(O)',
                name: 'B6(O)',
                price: '₹8.69 - 8.79 Lakh',
                engine: { type: '1493cc Diesel', power: '74.9 bhp', torque: '210 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Steel wheels', 'Fog lights', 'Cornering Light', 'Rear Washer & Wiper','Wheel Caps', 'Power Windows','Central Locking'],
                    'Interior': ['Music', 'Advanced ouchscreen Infotainment System', 'Steering Mounted Audio Controls','Fabric Seats'],
                    'Safety': ['Driver and co-driver Airbags', 'ABS', 'Reverse parking sensors','Seat Belt Reminder'],
                    'Extra': ['Fog lights','Cornering Light', 'Rear Washer & Wiper','Advance Infotainment System']
                }
            },


            
            // VARIANT: B8
            {
                id: 'B8',
                name: 'B8',
                price: '₹9.69 - 9.80 Lakh',
                engine: { type: '1493cc Diesel', power: '74.9 bhp', torque: '210 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['Diamond-cut alloys', 'Fog lights', 'Cornering Light', 'Rear Washer & Wiper','Wheel Caps', 'Power Windows','Central Locking'],
                    'Interior': ['Music', 'Advanced Touchscreen Infotainment System', 'Steering Mounted Audio Controls','Leatherette Seats'],
                    'Safety': ['Driver and co-driver Airbags', 'ABS', 'Reverse parking sensors','Seat Belt Reminder'],
                    'Extra': ['Diamond-cut alloys','Leatherette Seats']
                }
            }
        ]
    },

    // ============================================================
    // MODEL 2: BOLERO NEO
    // ============================================================
    {
        id: 'bolero-neo',
        name: 'Bolero Neo',
        icon: 'fas fa-car-side',
        subtitle: '1493cc Diesel | 7-Seater',
        variants: [
            // VARIANT: N4
            {
                id: 'N4',
                name: 'N4',
                price: '₹8.69 Lakh',
                engine: { type: '1493cc Diesel', power: '98.6 bhp', torque: '260 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Steel Wheels','Power Steering','Power windows front & rear','Central locking',],
                    'Interior': ['Vinyl Seats',],
                    'Safety': ['Driver & Co-Driver Airbags','Reverse parking assist','ABS + EBD'],
                }
            },

            // VARIANT: N8
            {
                id: 'N8',
                name: 'N8',
                price: '₹10.00 - 10.49 Lakh',
                engine: { type: '1493cc Diesel', power: '98.6 bhp', torque: '260 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Steel Wheels', 'Remote key entry','Power Steering','Power windows front & rear','Central locking','Rear glass wiper & defogger',],
                    'Interior': ['Fabric Seats',  'Music 4 speakers', 'Steering mounted audio controls',],
                    'Safety': ['Driver & Co-Driver Airbags','Reverse parking assist','ABS + EBD'],
                    'Extra': ['Music System','Rear glass wiper & defogger','Remote key entry',],
                }
            },

            // VARIANT: N10
            {
                id: 'N10',
                name: 'N10',
                price: '₹10.00 - 10.49 Lakh',
                engine: { type: '1493cc Diesel', power: '98.6 bhp', torque: '260 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Alloy Wheels','Electrically adjustable ORVMs','Rear-view camera','Fog lamps',],
                    'Interior': ['Height adjustable driver seat','Front armrests for driver & co-driver','Fabric Seats','9 inch Touchscreen Infotainment System','Crusie Control','ORVMs',],
                    'Safety': ['Driver & Co-Driver Airbags','Reverse parking assist','ABS + EBD'],
                    'Extra': ['Alloy Wheels','Rear Camera','Fog Lamps','9 inch infotainment Screen','Cruise Control','ORVMs'],
                }
            },

            //VARIANT: N10(O)
            {
                id: 'N10(O)',
                name: 'N10(O)',
                price: '₹10.00 - 10.49 Lakh',
                engine: { type: '1493cc Diesel', power: '98.6 bhp', torque: '260 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R15 Alloy Wheels','Electrically adjustable ORVMs','Rear-view camera','Fog lamps',],
                    'Interior': ['Leatherette (Mocha Brown)','Height adjustable driver seat','Front armrests for driver & co-driver','Fabric Seats','9 inch Touchscreen Infotainment System','Crusie Control','ORVMs',],
                    'Safety': ['Driver & Co-Driver Airbags','Reverse parking assist','ABS + EBD'],
                    'Extra': ['Leatherette (Mocha Brown)','Multi-Terrain Technology',],
                }
            },
            
            // VARIANT: N11
            {
                id: 'N11',
                name: 'N11',
                price: '₹9.59 - 9.99 Lakh',
                engine: { type: '1493cc Diesel', power: '98.6 bhp', torque: '260 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['R16 Alloy Wheels','Electrically adjustable ORVMs','Rear-view camera','Fog lamps',],
                    'Interior': ['Leatherette (Mocha Brown)','Height adjustable driver seat','Front armrests for driver & co-driver','Fabric Seats','9 inch Touchscreen Infotainment System','Crusie Control','ORVMs',],
                    'Safety': ['Driver & Co-Driver Airbags','Reverse parking assist','ABS + EBD'],
                    'Extra': ['R16 Alloy Wheels','Leatherette (Lunar Grey)',],
                }
           }
            
        ]


    },

    //sushil
        // ============================================================
    // MODEL 2: BOLERO NEO PLUS
    // ============================================================
    {
        id: 'Neo-plus',
        name: 'Neo Plus',
        icon: 'fas fa-car-side',
        subtitle: '2200cc Diesel | 9-Seater',
        variants: [
            // VARIANT: P4
            {
                id: 'P4',
                name: 'P4',
                price: '₹8.69 Lakh',
                engine: { type: '2200cc Diesel', power: '118.4 bhp', torque: '280 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['Steel wheels with cover', 'Power Windows Front & Rear ','Central Locking ','AC With Eco Mode ',],
                    'Interior': ['Hydraulic Power Steering ','Vinyl Seats',],
                    'Safety': ['Airbags - Driver & Co-driver t','ABS + EBD ','Auto Door Locking - During Drive ',],
                    //'Tech': ['7" Touchscreen', 'Bluetooth', 'USB/Aux', 'FM/AM Radio']
                }
            },
            
            // VARIANT: P10
            {
                id: 'P10',
                name: 'P10',
                price: '₹9.59 - 9.99 Lakh',
                engine: { type: '2200cc Diesel', power: '118.4 bhp', torque: '280 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['Alloy Wheels', 'Power Windows Front & Rear ','Central Locking ', 'Remote Key Entry ','AC With Eco Mode ',],
                    'Interior': ['Music System with 4 Speakers','9 inch Info-Screen', 'Steering Mounted Audio Controls ','Hydraulic Power Steering ','Fabric Seats',],
                    'Safety': ['Airbags - Driver & Co-driver ','ABS + EBD ','Auto Door Locking - During Drive',],
                    'Extra': ['Alloy Wheels', 'Remote Key Entry','Music System','Info-Screen',]
                }
           }
            
        ]


    },

    // ============================================================
    // MODEL 3: XUV 3XO
    // ============================================================
    {
        id: 'xuv3xo',
        name: 'XUV 3XO',
        icon: 'fas fa-car',
        subtitle: '1200 cc Petrol | 1500cc Diesel ',
        variants: [
            // VARIANT: MX1
            {
                id: 'MX1',
                name: 'MX1',
                price: '₹7.37 - 8.15 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT' },
                features: {
                    'Features': ['Halogen Headlamps', 'R16 Steel Wheels','ORVMS','Power Window - Front & Rear', 'Power Window : 1- Touch Down','Rear AC Vents','Engine Start/Stop',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                }
            },
            
               // VARIANT: MX2
            {
                id: 'MX2',
                name: 'MX2',
                price: '₹7.37 - 8.15 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- DMT' },
                features: {
                    'Features': ['Halogen Headlamps','R16 Steel Wheels','10.24 inch Infotainment','4 Speakers','Remote Keyless Entry','ORVMS','Power Window - Front & Rear', 'Power Window : 1- Touch Down','Rear AC Vents','Engine Start/Stop',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['Music (4 Speakers)','10.24 inch Infotainment Screen', 'Remote Keyless Entry']
                }
            },
            
            // VARIANT: MX2 pro
            {
                id: 'MX2 Pro',
                name: 'MX2 Pro',
                price: '₹8.45 - 9.85 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT | DMT' },
                features: {
                    'Features': ['Halogen Headlamps','R16 Steel Wheels','Wheel Cover','Wheel Cover','10.24 inch Infotainment','4 Speakers','Remote Keyless Entry','ORVMS','Power Window - Front & Rear', 'Power Window : 1- Touch Down','Rear AC Vents','Engine Start/Stop',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['Single Pane Sunroof','Wheel Cover']
                }
            },

            // VARIANT: MX3
            {
                id: 'MX3',
                name: 'MX3',
                price: '₹8.45 - 9.85 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT/AT | DMT/AT' },
                features: {
                    'Features': ['Halogen Headlamps','R16 Steel Wheels','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','Wheel Cover','Wheel Cover','10.24 inch HD Infotainment','4 Speakers','Remote Keyless Entry','ORVMS','Power Window - Front & Rear', 'Power Window : 1- Touch Down','Rear AC Vents','Engine Start/Stop',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['Cruise Control','Wireless Android Auto','Wired Apple CarPlay','HD Infotainment Screen']
                }
            },


             // VARIANT: MX3 Pro
            {
                id: 'MX3 Pro',
                name: 'MX3 Pro',
                price: '₹8.45 - 9.85 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT/AT | DMT' },
                features: {
                    'Features': ['LED Headlamps','LED DRL','Stylized Vector Wheel Cover','Wireless Charger','R16 Steel Wheels','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','10.24 inch HD Infotainment','4 Speakers','Remote Keyless Entry','ORVMS','Power Window - Front & Rear', 'Power Window : 1- Touch Down','Rear AC Vents','Engine Start/Stop',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['LED Headlamps','LED DRL','Stylized Vector Wheel Cover','Wireless Charger']
                }
            },

            // VARIANT: AX5
            {
                id: 'AX5',
                name: 'AX5',
                price: '₹10.85 - 12.95 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT/AT | DMT/AT' },
                features: {
                    'Features': ['R16 Diamond Cut Alloys','Twin 10.24 inch HD Infotainment','10.24 inch Digital Cluster Screen','Passive Keyless Entry','Push Button Start','6 Speakers','Rear View Camera','Leather Steering & Gear Knob','Online Navigation','Rear Wiper & Washer','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','ORVM',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['R16 Diamond Cut Alloys','Twin 10.24 inch HD Infotainment','10.24 inch Digital Cluster Screen','Passive Keyless Entry','Push Button Start','6 Speakers','Rear View Camera','Leather Steering & Gear Knob','Online Navigation','Rear Wiper & Washer']
                }
            },
            
            // VARIANT: AX5L
            {
                id: 'AX5L',
                name: 'AX5L',
                price: '₹10.85 - 12.95 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PAT(TGDi)' },
                features: {
                    'Features': ['R16 Diamond Cut Alloys','Level 2 ADAS','360-degree Surround View System','Blind View Monitor',' Electronic Parking Brake with Auto Hold','Dolby Atmos','Twin 10.24 inch HD Infotainment','10.24 inch Digital Cluster Screen','Passive Keyless Entry','Push Button Start','6 Speakers','Rear View Camera','Leather Steering & Gear Knob','Online Navigation','Rear Wiper & Washer','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','ORVM',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors',],
                    'Extra': ['Level 2 ADAS','360-degree Surround View System','Blind View Monitor',' Electronic Parking Brake with Auto Hold','Dolby Atmos']
                }
            },
            
            
            // VARIANT: AX7
            {
                id: 'AX7',
                name: 'AX7',
                price: '₹13.00 - 14.55 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT/AT (TGDi) | DMT/AT' },
                features: {
                    'Features': ['R17 Diamond Cut Alloys','Skyroof','Harman Kardon Premium Audio','Leatherette Seats','LED Front Fog Lamps','Soft touch Leatherette on Dashboard & Door Trims',,'Twin 10.24 inch HD Infotainment','10.24 inch Digital Cluster Screen','Passive Keyless Entry','Push Button Start','6 Speakers','Rear View Camera','Leather Steering & Gear Knob','Online Navigation','Rear Wiper & Washer','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','ORVM',],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['R17 Diamond Cut Alloys','Skyroof','Harman Kardon Premium Audio','Leatherette Seats','LED Front Fog Lamps','Soft touch Leatherette on Dashboard & Door Trims',]
                }
            },


            // VARIANT: AX7L
            {
                id: 'AX7L',
                name: 'AX7L',
                price: '₹13.00 - 14.55 Lakh',
                engine: { type: '1200cc Petrol | 1500cc Diesel', power: '110 bhp | 128 bhp (TGDi) | 115 bhp', torque: '200 Nm | 230 Nm (TGDi) | 300 Nm', transmission: '6- PMT/AT (TGDi) | DMT' },
                features: {
                    'Features': ['R17 Diamond Cut Alloys','Level 2 ADAS','360-Degree Surround View','Blind View Monitor','Electronic Parking Brake with Auto Hold','Skyroof','Harman Kardon Premium Audio','Leatherette Seats','LED Front Fog Lamps','Soft touch Leatherette on Dashboard & Door Trims','Twin 10.24 inch HD Infotainment','10.24 inch Digital Cluster Screen','Passive Keyless Entry','Push Button Start','6 Speakers','Rear View Camera','Leather Steering & Gear Knob','Online Navigation','Rear Wiper & Washer','Cruise Control','Wireless Android Auto','Wired Apple CarPlay','ORVM'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Extra': ['Level 2 ADAS','360-Degree Surround View','Blind View Monitor','Electronic Parking Brake with Auto Hold',]
                }
            }
        ]
    },

    // ============================================================
    // MODEL 4: XUV 7XO
    // ============================================================
    {
        id: 'xuv7xo',
        name: 'XUV 7XO',
        icon: 'fas fa-crown',
        subtitle: '2.0L Turbo | Premium 7-Seater',
        variants: [
            // VARIANT: FWD
            {
                id: 'FWD',
                name: 'FWD',
                price: '₹13.66 - 19.50 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '200 bhp', torque: '380 Nm', transmission: '6-MT/AT' },
                features: {
                    'Features': ['18" Alloy wheels', 'LED Projector', 'LED DRLs', 'Panoramic Sunroof'],
                    'Safety': ['7 SRS Airbags', 'ABS + EBD + TCS', 'ESC', '360° Camera'],
                }
            },
            // VARIANT: AWD
            {
                id: 'AWD',
                name: 'AWD',
                price: '₹20.00 - 24.92 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '200 bhp', torque: '380 Nm', transmission: '6-Auto Only' },
                features: {
                    'Exterior': ['18" Premium alloys', 'LED Projectors', 'LED DRLs + Fog', 'Panoramic Sunroof'],
                    'Interior': ['All FWD features', 'AWD-specific modes', 'Terrain response', 'AWD status display'],
                    'Safety': ['7 SRS Airbags', 'ABS + EBD + TCS', 'Level 2 ADAS', '360° Camera'],
                    'AWD Tech': ['All-wheel drive', 'Intelligent torque', 'Better wet/snow', 'Enhanced stability']
                }
            }
        ]
    },

    // ============================================================
    // MODEL 5: SCORPIO CLASSIC
    // ============================================================
    {
        id: 'scorpio-classic',
        name: 'Scorpio Classic',
        icon: 'fas fa-shield-alt',
        subtitle: '2.2L Diesel | Legend SUV',
        variants: [
            // VARIANT: S
            {
                id: 'S',
                name: 'S',
                price: '₹12.98 Lakh',
                engine: { type: '2.2L Diesel', power: '130 bhp', torque: '300 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['Classic boxy design', '17" Steel wheels', 'Dual headlamps', 'Manual ORVMs'],
                    'Interior': ['Touchscreen', 'Manual AC', 'Fabric seats', 'Power steering'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'Rear parking', '360° Camera'],
                    'Tech': ['Touchscreen', 'Bluetooth', 'USB/Aux', 'Steering controls']
                }
            },
            // VARIANT: S11
            {
                id: 'S11',
                name: 'S11',
                price: '₹16.70 Lakh',
                engine: { type: '2.2L Diesel', power: '130 bhp', torque: '300 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['17" Alloy wheels', 'Projector lamps', 'LED DRLs', 'Fog lamps'],
                    'Interior': ['Touchscreen', 'Automatic AC', 'Rear climate', 'Leatherette'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'Traction control', '360° Camera'],
                    'Tech': ['Touchscreen', 'Bluetooth', 'Steering controls', 'TPMS display']
                }
            }
        ]
    },

    // ============================================================
    // MODEL 6: SCORPIO N
    // ============================================================
    {
        id: 'scorpio-n',
        name: 'Scorpio N',
        icon: 'fas fa-bolt',
        subtitle: '2.0L Turbo | Modern Premium',
        variants: [
            // VARIANT: Z2
            {
                id: 'Z2',
                name: 'Z2',
                price: '₹13.49 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '200 bhp', torque: '380 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['Modern design', '17" Alloys', 'LED Projectors', 'LED DRLs'],
                    'Interior': ['8" Touchscreen', 'Wireless Android Auto', 'Apple CarPlay', 'Manual AC'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'Hill assist'],
                    'Tech': ['8" Touchscreen', 'Wireless Android/Apple', 'Steering controls', 'Wireless charger']
                }
            },
            // VARIANT: Z4
            {
                id: 'Z4',
                name: 'Z4',
                price: '₹14.50 - 16.00 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '200 bhp', torque: '380 Nm', transmission: '6-MT/AT' },
                features: {
                    'Exterior': ['18" Alloy wheels', 'LED Projectors', 'LED DRLs + Fog', 'Chrome grille'],
                    'Interior': ['8" Touchscreen', 'Dual-zone auto AC', 'Leatherette seats', 'Ventilated front'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD', 'ESC', '360° Camera'],
                    'Tech': ['8" Touchscreen', 'Wireless Android/Apple', 'Steering controls', 'USB Type-C']
                }
            },
            // VARIANT: Z8
            {
                id: 'Z8',
                name: 'Z8',
                price: '₹16.50 - 24.34 Lakh',
                engine: { type: '2.0L Turbo Petrol / 2.2L Diesel', power: '200 bhp', torque: '380 Nm', transmission: '6-Auto' },
                features: {
                    'Exterior': ['18" Premium alloys', 'LED Projectors', 'LED DRLs + Fog', 'Panoramic sunroof'],
                    'Interior': ['8" Touchscreen', 'Dual-zone auto AC', 'Premium leather', 'Rear climate'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD + TCS', 'Level 2 ADAS', '360° Camera'],
                    '4XPLOR': ['4WD system (optional)', 'Locking differential', 'Rock/Sand/Mud modes', 'Downhill assist']
                }
            }
        ]
    },

    // ============================================================
    // MODEL 7: THAR & ROXX
    // ============================================================
    {
        id: 'thar',
        name: 'Thar & ROXX',
        icon: 'fas fa-mountain',
        subtitle: '2.0L Turbo | Adventure Icon',
        variants: [
            // VARIANT: AX/LX
            {
                id: 'AX',
                name: 'AX/LX',
                price: '₹9.99 - 13.50 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '150 bhp', torque: '320 Nm', transmission: '5/6-MT' },
                features: {
                    'Exterior': ['Convertible soft-top', 'Steel wheels', 'Halogen lamps', 'All-terrain tires'],
                    'Interior': ['Basic infotainment', 'Manual AC', 'Manual power steering', 'Electric windows'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'ESC', 'Rear parking'],
                    'Off-Road': ['Real 4x4', 'E-locking', '180mm clearance', 'All-terrain tires']
                }
            },
            // VARIANT: MX
            {
                id: 'MX',
                name: 'MX',
                price: '₹14.50 - 17.19 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '150 bhp', torque: '320 Nm', transmission: '6-MT/AT' },
                features: {
                    'Exterior': ['17" Alloy wheels', 'LED Projectors', 'LED DRLs', 'Hardtop option'],
                    'Interior': ['8" Touchscreen', 'Wireless Android Auto', 'Apple CarPlay', 'Dual-zone auto AC'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', '360° Camera'],
                    'Off-Road': ['4x4 system', 'Drive modes', '180mm clearance', 'Skid plates']
                }
            },
            // VARIANT: ROXX
            {
                id: 'ROXX',
                name: 'ROXX',
                price: '₹12.39 - 22.25 Lakh',
                engine: { type: '2.0L Turbo Petrol', power: '160-177 bhp', torque: '330-380 Nm', transmission: '6-MT/AT' },
                features: {
                    'Exterior': ['5-door extended', '18-19" alloys', 'LED Projectors', 'Panoramic sunroof'],
                    'Interior': ['8-10" Touchscreen', 'Wireless Android/Apple', 'Dual-zone auto AC', 'Premium leather'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD + TCS', 'Level 2 ADAS', '360° Camera'],
                    'Off-Road Expert': ['Real 4x4 (optional)', 'Multi-drive modes', '175mm clearance', 'Adventure package']
                }
            }
        ]
    }
];

// Feature icons
const featureIcons = {
    'Exterior': 'fas fa-car',
    'Interior': 'fas fa-home',
    'Safety': 'fas fa-shield-alt',
    'Tech': 'fas fa-music',
    'Off-Road': 'fas fa-cog',
    'Off-Road Expert': 'fas fa-cog',
    'AWD Tech': 'fas fa-cog',
    '4XPLOR': 'fas fa-cog'
};
