/**
 * Construction Packages Data
 * 
 * All package specifications, pricing, and category data.
 * Structured by location for future multi-city expansion.
 */

export const locations = [
    { id: 'bengaluru', name: 'Bengaluru' }
    // Future: { id: 'chennai', name: 'Chennai' }
];

export const defaultLocation = 'bengaluru';

const categories = {
    CREATING_ASSETS: 'Creating Assets',
    DESIGN_DRAWINGS: 'Design & Drawings',
    FOUNDATION: 'Foundation Works',
    DOORS_WINDOWS: 'Doors & Windows',
    FLOORING: 'Flooring & Wall Cladding',
    STRUCTURE: 'Structure & Elevation',
    ELECTRICAL_PLUMBING: 'Electrical & Plumbing',
    PAINTING: 'Painting',
    KITCHEN_BATHROOM: 'Kitchen & Bathroom Fittings',
    MISCELLANEOUS: 'Miscellaneous Expenses'
};

// ──────────────────────────────────────────────
// PACKAGE 01 — CLASSIC — ₹2,000 / sq.ft
// ──────────────────────────────────────────────
const classicPackage = {
    id: 'classic',
    name: 'Classic',
    price: 2000,
    descriptor: 'Construction Package',
    categories: [
        {
            name: categories.CREATING_ASSETS,
            items: []
        },
        {
            name: categories.DESIGN_DRAWINGS,
            items: [
                '2D Floor Plans',
                '3D Elevation Design',
                'Structural Drawings',
                'Electrical Drawings',
                'Plumbing Drawings'
            ]
        },
        {
            name: categories.FOUNDATION,
            items: [
                'Footing, Columns, Plinth Beams will be done as per Structural Drawings.',
                'Excavation upto 6 Feet Depth if required.',
                'Curing period: 10–15 Days for all Concrete Works.',
                'M20 Grade Mixture for Footings, Columns and Plinth Beams.',
                'Terminator will be used in foundation for Structural Safety.'
            ]
        },
        {
            name: categories.DOORS_WINDOWS,
            items: [
                'Main Door: Teak Frame & Teak Door.',
                'Pooja/Prayer: Teak Frame & Teak Door.',
                'Room Doors: Neem Wooden Frame (5 inches × 3 inches) & Flush Door.',
                'Bathroom Doors: P.V.C Doors.',
                'Windows: UPVC Windows.'
            ]
        },
        {
            name: categories.FLOORING,
            items: [
                'Living Hall, Bed Rooms & Kitchens: ₹50 per sq.ft tiles.',
                'Staircase: ₹40 per sq.ft tiles.',
                'Parking Area: 12" × 12" Anti-Skid Tiles.',
                'Bathroom Area: 12" × 12" Anti-Skid Tiles.',
                'Balcony & Open Areas: 12" × 12" Anti-Skid Tiles.',
                'Bathroom Wall Cladding: 12" × 18" Wall Tiles up to 7 feet.',
                'Kitchen Wall Cladding: 12" × 18" Wall Tiles up to 4 feet.'
            ]
        },
        {
            name: categories.STRUCTURE,
            items: [
                'Outer Walls: 6" Solid Block.',
                'Inner Walls: 4" Solid Block.',
                'Wall Raising: Portland Pozzolana Cement (1:6 Ratio).',
                'Wall Plastering: Portland Pozzolana Cement (1:5 Ratio).',
                'Roof Height & Thickness: 10 feet height with 5" thick roof.',
                'Columns & Roof Beams: M20 Grade Cement Mixture with OPC 53 Grade Cement.',
                'Steel Reinforcement: As per Structural Drawings.',
                'Curing Period: 15 Days for Roof & 7 Days for Columns.'
            ]
        },
        {
            name: categories.ELECTRICAL_PLUMBING,
            items: [
                'Wires: Finolex.',
                'Switches & Sockets: Hi-Fi.',
                'Electrical Pipes: ISI Marked Pipes.',
                'Plumbing Pipes: Prince Pipes.',
                'Overhead Water Tank: 1000 Liters Hi-Tech Triple Layered Tank.'
            ]
        },
        {
            name: categories.PAINTING,
            items: [
                'Interior Walls: Double Coats Berger Bison Wall Putty + Single Coat Birla Opus Style Perfect Start Primer + Double Coats Birla Opus Calista Everstay / Neo Star.',
                'Exterior Walls: Single Coat Birla Opus Style Perfect Start Primer + Double Coats Birla Opus Style Power Bright.',
                'Elevation: Asian Primer + Apex Exterior Emulsion.',
                'Terrace: Waterproofing for Final Open Roof.'
            ]
        },
        {
            name: categories.KITCHEN_BATHROOM,
            items: [
                'Sink Faucets: Cera.',
                'Other Faucets: Cera.',
                'Sink: Stainless Steel.',
                'Counter Top: Granite Countertop.',
                'Sanitary Fitting: Parryware.',
                'Sanitary Accessories: ISI Certified Material.',
                'Pipe Fittings: CPVC & PVC Pipes.'
            ]
        },
        {
            name: categories.MISCELLANEOUS,
            items: [
                'Compound Wall: ₹1100/rft up to 4 feet height.',
                'Wall Claddings: Front Portico/Elevation/Exterior Walls using Tiles, Granite & Marbles.',
                'RCC or Brick Fins, Boxes, Cornice Works, Slope or Curved Roof etc.',
                'BBMP Plan Sanction.',
                'Electrical Power Sanction — Temporary & Permanent.',
                'Water & Electricity Requirements.',
                'Road Cutting for Water, Drainage & Electricity Connections.'
            ]
        }
    ]
};

// ──────────────────────────────────────────────
// PACKAGE 02 — PREMIUM — ₹2,299 / sq.ft
// ──────────────────────────────────────────────
const premiumPackage = {
    id: 'premium',
    name: 'Premium',
    price: 2299,
    descriptor: 'Construction Package',
    categories: [
        {
            name: categories.CREATING_ASSETS,
            items: []
        },
        {
            name: categories.DESIGN_DRAWINGS,
            items: [
                '2D Floor Plans',
                '3D Elevation Design',
                'Structural Drawings',
                'Electrical Drawings',
                'Plumbing Drawings'
            ]
        },
        {
            name: categories.FOUNDATION,
            items: [
                'Footing, Columns, Plinth Beams as per Structural Drawings.',
                'Excavation upto 6 Feet Depth if required.',
                'Curing period: 10–15 Days for all Concrete Works.',
                'M25 Grade Mixture for Footings, Columns and Plinth Beams.',
                'Terminator for Structural Safety as required.'
            ]
        },
        {
            name: categories.DOORS_WINDOWS,
            items: [
                'Main Door: Teak Frame & Teak Door.',
                'Pooja/Prayer: Teak Frame & Teak Door.',
                'Room Doors: Sal Wooden Frame (5" × 3") & Flush Doors.',
                'Bathroom Doors: W.P.C Doors & Frames.',
                'Windows: UPVC Windows with pure white profile.'
            ]
        },
        {
            name: categories.FLOORING,
            items: [
                'Living Hall, Bed Rooms & Kitchens: ₹70/sq.ft tiles.',
                'Staircase: ₹50/sq.ft tiles.',
                'Parking Area: 12" × 12" Anti-Skid Tiles.',
                'Bathroom Area: 12" × 12" Anti-Skid Tiles.',
                'Balcony & Open Areas: 12" × 12" Anti-Skid Tiles.',
                'Bathroom Wall Cladding: 24" × 48" Wall Tiles up to 10\'.',
                'Kitchen Wall Cladding: 12" × 18" Wall Tiles up to 4 feet.'
            ]
        },
        {
            name: categories.STRUCTURE,
            items: [
                'Outer Walls: 6" Solid Block.',
                'Inner Walls: 4" Solid Block.',
                'Wall Raising: Portland Pozzolana Cement (1:4 Ratio).',
                'Wall Plastering: Portland Pozzolana Cement (1:5 Ratio).',
                'Roof Height & Thickness: 10\' Height with 6" Thick Roof.',
                'Columns & Roof Beams: M25 Grade Cement Mixture with OPC 53 Grade Cement.',
                'Steel Reinforcement: As per Structural Drawings.',
                'Curing: 15–21 Days for Roof Beams & 7–10 Days for Columns.'
            ]
        },
        {
            name: categories.ELECTRICAL_PLUMBING,
            items: [
                'Wires: Polycab.',
                'Switches & Sockets: Panasonic – Anchor Roma.',
                'Electrical Pipes: VIP Brand.',
                'Plumbing Pipes: Supreme Brand CPVC & PVC.',
                'Overhead Tank: 1000 Liters Supreme Triple Layered Tank.'
            ]
        },
        {
            name: categories.PAINTING,
            items: [
                'Interior: Double Coats Birla White Wall Care Putty + BP White Primer WT + Double Coats Berger Easy Clean Fresh Premium Emulsion.',
                'Exterior: Berger Weather Coat Exterior Primer + Double Coats Berger Weather Coat Anti Dust Paint.',
                'Terrace/Final Roof: Dr. Fixit Waterproofing.'
            ]
        },
        {
            name: categories.KITCHEN_BATHROOM,
            items: [
                'Sink Faucets: Hindware.',
                'Other Faucets: Hindware.',
                'Sink: Stainless Steel.',
                'Counter Top: Black Granite, 40mm thickness.',
                'Sanitary Fittings: Hindware.',
                'Sanitary Accessories: ISI Certified Materials.',
                'Pipe Fittings: CPVC & PVC.'
            ]
        },
        {
            name: categories.MISCELLANEOUS,
            items: [
                'Compound Wall: ₹1100/rft up to 4 feet height.',
                'Wall Claddings: Front Portico/Elevation/Exterior Walls using Tiles, Granite & Marbles.',
                'RCC or Brick Fins, Boxes, Cornice Works, Slope or Curved Roof etc.',
                'BBMP Plan Sanction.',
                'Electrical Power Sanction Charges.',
                'Water & Electricity Requirements.',
                'Road Cutting for Water, Drainage & Electricity Connections.'
            ]
        }
    ]
};

// ──────────────────────────────────────────────
// PACKAGE 03 — ROYALE — ₹2,599 / sq.ft
// ──────────────────────────────────────────────
const royalePackage = {
    id: 'royale',
    name: 'Royale',
    price: 2599,
    descriptor: 'Construction Package',
    categories: [
        {
            name: categories.CREATING_ASSETS,
            items: [
                '2D Floor Plans',
                '3D Elevation Design',
                'Structural Drawings',
                'Electrical Drawings',
                'Plumbing Drawings'
            ]
        },
        {
            name: categories.DESIGN_DRAWINGS,
            items: []
        },
        {
            name: categories.FOUNDATION,
            items: [
                'Footing, Columns, Plinth Beams as per Structural Drawings.',
                'Excavation upto 6 Feet Depth if required.',
                'Curing: 10–15 Days.',
                'M25 Grade Mixture.',
                'Terminator for Structural Safety as required.'
            ]
        },
        {
            name: categories.DOORS_WINDOWS,
            items: [
                'Main Door: Teak Frame (6" × 4") & Teak Door.',
                'Pooja/Prayer: Teak Frame (4" × 3") & Teak Door.',
                'Room Doors: Honne Wooden Frame (5" × 3") & Premium Veneer Doors.',
                'Bathroom: Premium WPC Frames and Doors.',
                'Window Frames: Teak Frames (4" × 3").',
                'Windows: Honne Wooden Shutters.'
            ]
        },
        {
            name: categories.FLOORING,
            items: [
                'Living Hall, Bed Rooms & Kitchens: ₹100/sq.ft Granite/Tiles.',
                'Staircase: ₹70/sq.ft Premium Anti-Skid Tiles.',
                'Parking: 12" × 12" Anti-Skid Tiles.',
                'Bathroom: 12" × 12" Anti-Skid Tiles.',
                'Balcony & Open Areas: 12" × 12" Anti-Skid Tiles.',
                'Bathroom Wall Cladding: 24" × 48" Wall Tiles up to Roof.',
                'Kitchen Wall Cladding: 24" × 48" Wall Tiles.'
            ]
        },
        {
            name: categories.STRUCTURE,
            items: [
                'Outer Walls: 6" Hard Cement Solid Block.',
                'Inner Walls: 4" Hard Cement Solid Block.',
                'Wall Raising: Portland Pozzolana Cement (1:4).',
                'Wall Plastering: Portland Pozzolana Cement (1:5).',
                'Roof: 10 Feet Height with Heavy 6" Thick Roof.',
                'Columns & Roof Beams: M25 Grade Cement Mixture with OPC 53 Grade Cement.',
                'Steel Reinforcement: As per Structural Drawings.',
                'Curing: 15–21 Days Roof Beams & 7–10 Days Columns.'
            ]
        },
        {
            name: categories.ELECTRICAL_PLUMBING,
            items: [
                'Wires: Havells.',
                'Switches & Sockets: Havells — Crabtree Murano Series.',
                'Electrical Pipes: VIP Pipes.',
                'Plumbing Pipes: Astral Pipes.',
                'Overhead Water Tank: 2000 Liters Standard.'
            ]
        },
        {
            name: categories.PAINTING,
            items: [
                'Interior: Asian Paints TruCare Premium Putty + Royale Wall Base-coat Primer + Asian Paints Royal Luxury.',
                'Exterior: Asian Paints TruCare Exterior Wall Primer + Asian Paints Royal Apex Ultima.',
                'Terrace: Dr. Fixit Waterproofing.'
            ]
        },
        {
            name: categories.KITCHEN_BATHROOM,
            items: [
                'Sink Faucets: Jaquar — Queen\'s Prime & Opal Prime Luxury.',
                'Other Faucets: Jaquar — Queen\'s Prime & Opal Prime Luxury.',
                'Sink: Quartz Sink.',
                'Countertop: Quartz.',
                'Sanitary: Jaquar — Queen\'s Prime & Opal Prime Luxury.',
                'Accessories: Vikings.',
                'Pipe Fittings: CPVC & PVC.'
            ]
        },
        {
            name: categories.MISCELLANEOUS,
            items: [
                'Compound Wall: ₹1100/rft.',
                'BBMP Plan Sanction.',
                'Electrical Power Sanction.',
                'Water & Electricity Requirements.',
                'Road Cutting for Water, Drainage & Electricity Connections.'
            ]
        }
    ]
};

// ──────────────────────────────────────────────
// PACKAGE 04 — SIGNATURE — ₹2,999 / sq.ft
// ──────────────────────────────────────────────
const signaturePackage = {
    id: 'signature',
    name: 'Signature',
    price: 2999,
    descriptor: 'Construction Package',
    categories: [
        {
            name: categories.CREATING_ASSETS,
            items: [
                '2D Working Floor Plans',
                '3D Elevation Design',
                'Structural Drawings',
                'Electrical Drawings',
                'Plumbing Drawings'
            ]
        },
        {
            name: categories.DESIGN_DRAWINGS,
            items: []
        },
        {
            name: categories.FOUNDATION,
            items: [
                'Footing, Columns, Plinth Beams as per Structural Drawings.',
                'Excavation upto 6 Feet Depth.',
                'Curing: 10–15 Days.',
                'M25 Grade Mixture.',
                'Terminator in Foundation for Structural Safety.'
            ]
        },
        {
            name: categories.DOORS_WINDOWS,
            items: [
                'Main Door: Teak Frame (6" × 4") & Premium Polished Teak Door.',
                'Pooja/Prayer: Teak Frame (4" × 3") & Teak Door.',
                'Room Doors: Teak Wooden Frame (5" × 3") & Premium Veneer Doors.',
                'Bathroom Doors: Premium WPC Frames and WPC Doors.',
                'Window Frames: Teak Frames with Steel for Safety (4" × 3").',
                'Windows: Teak Shutters.'
            ]
        },
        {
            name: categories.FLOORING,
            items: [
                'Living Hall, Bed Rooms & Kitchens: ₹150/sq.ft Marbles/Granite/Tiles.',
                'Staircase: ₹100/sq.ft Anti-Skid Granite.',
                'Parking: ₹100/sq.ft Anti-Skid Granite/Tiles.',
                'Bathroom: ₹120/sq.ft Leathered Granite / Porcelain Slabs / Flamed Granite / Vitrified Matte / Sugar Anti-Skid Tiles.',
                'Balcony & Open Areas: ₹120/sq.ft Leathered Granite / Vitrified Matte / Sugar Anti-Skid Tiles.',
                'Bathroom Wall Cladding: ₹120/sq.ft Leathered Granite / Porcelain Slabs / Flamed Granite / Vitrified Matte / Sugar Anti-Skid Tiles.',
                'Kitchen Wall Cladding: ₹130/sq.ft Quartz / Porcelain Slabs / Polished Granite / Lacquered Glass.'
            ]
        },
        {
            name: categories.STRUCTURE,
            items: [
                'Outer Walls: 6" Hard Cement Solid Block.',
                'Inner Walls: 4" Hard Cement Solid Block.',
                'Wall Raising: Portland Pozzolana Cement (1:4).',
                'Wall Plastering: Portland Pozzolana Cement (1:5).',
                'Roof: 10\' Height with Heavy 6" Thick Roof.',
                'Columns & Roof Beams: M25 Grade Cement Mixture with OPC 53 Grade Cement.',
                'Steel Reinforcement: As per Structural Drawings.',
                'Curing: 21 Days Roof & 10 Days Columns.'
            ]
        },
        {
            name: categories.ELECTRICAL_PLUMBING,
            items: [
                'Wires: Havells Life Shield HFFR.',
                'Switches & Sockets: Legrand — Living Now Series.',
                'Electrical Pipes: VIP Pipes — White.',
                'Plumbing Pipes: Ashirvad CPVC & PVC.',
                'Overhead Water Tank: 2000 Liters Standard.'
            ]
        },
        {
            name: categories.PAINTING,
            items: [
                'Interior: Asian Paints Royale Acrylic Putty + Royale Wall Base-coat Primer + Dulux AkzoNobel Ambiance Velvet Touch Bespoke Top Coat.',
                'Exterior: Asian Paints SmartCare Damp Proof Exterior Wall Primer + Dulux AkzoNobel Weather Shield Power Flexx.',
                'Terrace: Dr. Fixit Waterproofing.'
            ]
        },
        {
            name: categories.KITCHEN_BATHROOM,
            items: [
                'Sink Faucets: Kohler — Contemporary Luxe.',
                'Other Faucets: Kohler — Contemporary Luxe.',
                'Sink: Quartz.',
                'Countertop: Engineered Quartz / Porcelain / Sintered Stone.',
                'Sanitary: Kohler — Contemporary Luxe.',
                'Accessories: Vikings.',
                'Pipe Fittings: CPVC & PVC.'
            ]
        },
        {
            name: categories.MISCELLANEOUS,
            items: [
                'Compound Wall: ₹1100/running feet up to 5 feet height.',
                'BBMP Plan Sanction.',
                'Electrical Power Sanction Charges.',
                'Water & Electricity Requirements.',
                'Road Cutting for Water, Drainage & Electricity Connections.'
            ]
        }
    ]
};

// ──────────────────────────────────────────────
// Packages grouped by location
// ──────────────────────────────────────────────
export const packagesByLocation = {
    bengaluru: [classicPackage, premiumPackage, royalePackage, signaturePackage]
};
