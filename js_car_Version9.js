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
        subtitle: '1.5L Diesel | Budget SUV',
        variants: [
            // VARIANT: B4
            {
                id: 'B4',
                name: 'B4',
                price: '₹7.99 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['Steel wheels', 'Halogen headlamps', 'Body-colored bumpers', 'Roof rails'],
                    'Interior': ['Manual AC/Heater', 'Power steering', 'Fabric upholstery', 'Manual windows'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'Rear parking sensors', 'Speed alert'],
                    'Tech': ['No infotainment', 'USB connectivity', 'Basic system']
                }
            },
            // VARIANT: B6
            {
                id: 'B6',
                name: 'B6',
                price: '₹8.69 - 8.79 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['Alloy wheels', 'Chrome grille', 'Bending headlamps', 'Colored ORVMs'],
                    'Interior': ['7" Touchscreen', 'Rear power windows', 'Steering controls', 'USB connectivity'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'Traction control', 'ESC'],
                    'Tech': ['7" Touchscreen', 'Bluetooth', 'Aux/USB', 'Audio system']
                }
            },
            // VARIANT: B8
            {
                id: 'B8',
                name: 'B8',
                price: '₹9.69 - 9.80 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['Diamond-cut alloys', 'Projector headlamps', 'LED taillamps', 'Roof rails'],
                    'Interior': ['7" Touchscreen', 'Leatherette', 'All power windows', 'Rear wiper/washer'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', '360° Camera'],
                    'Tech': ['7" Touchscreen', 'Bluetooth', 'Steering controls', 'USB Type-C']
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
        subtitle: '1.5L Diesel | Modern SUV',
        variants: [
            // VARIANT: N4
            {
                id: 'N4',
                name: 'N4',
                price: '₹8.69 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['Modern design', 'Alloy wheels 15"', 'LED DRLs', 'Roof rails'],
                    'Interior': ['7" Touchscreen', 'All power windows', 'Steering controls', 'Rear AC vents'],
                    'Safety': ['2 SRS Airbags', 'ABS with EBD', 'Rear parking', 'Speed alert'],
                    'Tech': ['7" Touchscreen', 'Bluetooth', 'USB/Aux', 'FM/AM Radio']
                }
            },
            // VARIANT: N6
            {
                id: 'N6',
                name: 'N6',
                price: '₹9.59 - 9.99 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['16" Alloy wheels', 'LED Projector', 'LED DRLs', 'Sunroof option'],
                    'Interior': ['7" Touchscreen', 'Dual-zone AC', 'Rear AC vents', 'Leatherette'],
                    'Safety': ['4 SRS Airbags', 'ABS with EBD', 'ESC', '360° Camera'],
                    'Tech': ['7" Touchscreen', 'Wireless Android Auto', 'Apple CarPlay', 'USB Type-C']
                }
            },
            // VARIANT: N8
            {
                id: 'N8',
                name: 'N8',
                price: '₹10.00 - 10.49 Lakh',
                engine: { type: '1.5L Diesel', power: '69 bhp', torque: '165 Nm', transmission: '5-MT' },
                features: {
                    'Exterior': ['16" Premium alloys', 'LED Projectors', 'LED DRLs + Fog', 'Sunroof'],
                    'Interior': ['7" Touchscreen', 'Dual-zone auto', 'Rear climate', 'Premium leather'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD + TCS', 'ESC', '360° Camera'],
                    'Tech': ['7" Touchscreen', 'Wireless Android/Apple', 'Steering controls', 'USB Type-C + Wireless']
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
        subtitle: '1.2L Turbo | Compact Premium',
        variants: [
            // VARIANT: MX1
            {
                id: 'MX1',
                name: 'MX1',
                price: '₹7.37 - 8.15 Lakh',
                engine: { type: '1.2L Turbo Petrol', power: '108 bhp', torque: '200 Nm', transmission: '6-MT' },
                features: {
                    'Exterior': ['Bi-halogen projector', 'LED tail lamps', 'Steel wheels 16"', 'Basic bumpers'],
                    'Interior': ['Fabric seats', 'Manual AC + rear vents', 'All power windows', 'Adjustable ORVMs'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'ISOFIX anchors'],
                    'Tech': ['No infotainment', 'USB-A port', 'USB-C port', '12V socket']
                }
            },
            // VARIANT: MX3
            {
                id: 'MX3',
                name: 'MX3',
                price: '₹8.45 - 9.85 Lakh',
                engine: { type: '1.2L Turbo Petrol', power: '108 bhp', torque: '200 Nm', transmission: '6-MT/AT' },
                features: {
                    'Exterior': ['16" Alloy wheels', 'LED Projectors', 'LED DRLs', 'Sunroof option'],
                    'Interior': ['10.25" HD display', 'Wireless Android Auto', 'Apple CarPlay', 'Cruise control'],
                    'Safety': ['6 SRS Airbags', 'ABS with EBD', 'ESC', 'Rear camera'],
                    'Tech': ['10.25" Display', 'Wireless Android/Apple', 'Steering controls', 'Wireless charger']
                }
            },
            // VARIANT: AX5
            {
                id: 'AX5',
                name: 'AX5',
                price: '₹10.85 - 12.95 Lakh',
                engine: { type: '1.2L Turbo Petrol', power: '108 bhp', torque: '200 Nm', transmission: '6-MT/AT/AMT' },
                features: {
                    'Exterior': ['17" Diamond-cut alloys', 'LED Projectors', 'LED DRLs + Fog', 'Panoramic sunroof'],
                    'Interior': ['Twin 10.25" displays', 'Dual-zone AC', 'Rear climate vents', 'Leather steering'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD', 'ESC', '360° Camera'],
                    'Tech': ['Twin displays', 'Connected car tech', 'Alexa integration', 'USB-C + Wireless']
                }
            },
            // VARIANT: AX7
            {
                id: 'AX7',
                name: 'AX7',
                price: '₹13.00 - 14.55 Lakh',
                engine: { type: '1.2L Turbo Petrol TGDi', power: '130 bhp', torque: '230 Nm', transmission: '6-MT/AT/AMT' },
                features: {
                    'Exterior': ['17" Premium alloys', 'LED Projectors', 'LED DRLs + Fog', 'Panoramic Skyroof'],
                    'Interior': ['Twin 10.25" HD displays', 'Dual-zone auto AC', 'Leather seats', 'Ventilated front'],
                    'Safety': ['6 SRS Airbags', 'ABS + EBD', 'Level 2 ADAS', '360° Camera'],
                    'Tech': ['Twin HD displays', 'Harman Kardon audio', 'Wireless Android/Apple', '65W USB-C Fast']
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
                    'Exterior': ['18" Alloy wheels', 'LED Projector', 'LED DRLs', 'Panoramic Sunroof'],
                    'Interior': ['11.2" Curved display', '7-Seater (2+3+2)', 'Premium leather', 'Dual-zone auto AC'],
                    'Safety': ['7 SRS Airbags', 'ABS + EBD + TCS', 'ESC', '360° Camera'],
                    'Tech': ['11.2" Curved display', 'AdrenoX connected', 'Wireless Android/Apple', 'Premium Bose audio']
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