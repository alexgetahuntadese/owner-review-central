
import { Chapter } from '../types';

export const technicalDrawingChapters: Chapter[] = [
  {
    id: 'drawing_fundamentals',
    name: 'Technical Drawing Fundamentals',
    description: 'Basic principles, tools, and conventions of technical drawing',
    questions: [
      // Easy Questions (10)
      {
        id: 'draw_easy_1',
        question: 'What is technical drawing?',
        options: ['Artistic drawing', 'Precise drawing showing exact dimensions and specifications', 'Sketch drawing', 'Freehand drawing'],
        correct: 'Precise drawing showing exact dimensions and specifications',
        explanation: 'Technical drawing is a precise way of communicating technical information through standardized drawings.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_2',
        question: 'What is the standard pencil hardness for construction lines?',
        options: ['2H', '4H', 'HB', '2B'],
        correct: '4H',
        explanation: '4H pencils create light, thin lines perfect for construction and layout work.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_3',
        question: 'What is the standard pencil hardness for visible outlines?',
        options: ['4H', '2H', 'HB', '2B'],
        correct: 'HB',
        explanation: 'HB pencils provide medium darkness suitable for visible object lines.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_4',
        question: 'What is orthographic projection?',
        options: ['3D drawing', 'Drawing showing multiple 2D views of an object', 'Perspective drawing', 'Isometric drawing'],
        correct: 'Drawing showing multiple 2D views of an object',
        explanation: 'Orthographic projection shows an object through multiple 2D views like front, top, and side.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_5',
        question: 'How many basic views are typically shown in orthographic projection?',
        options: ['2', '3', '4', '6'],
        correct: '3',
        explanation: 'The three basic views are front, top, and right side view.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_6',
        question: 'What is a dimension line?',
        options: ['Object outline', 'Line showing measurement of features', 'Hidden edge', 'Center line'],
        correct: 'Line showing measurement of features',
        explanation: 'Dimension lines indicate the measurement or size of features on a drawing.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_7',
        question: 'What is a center line used for?',
        options: ['Object boundaries', 'Showing axes of symmetry', 'Hidden features', 'Dimensions'],
        correct: 'Showing axes of symmetry',
        explanation: 'Center lines indicate the axis or center of symmetrical features like circles and cylinders.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_8',
        question: 'What is a hidden line?',
        options: ['Visible edge', 'Edge that cannot be seen from viewing direction', 'Construction line', 'Dimension line'],
        correct: 'Edge that cannot be seen from viewing direction',
        explanation: 'Hidden lines represent edges or features that are not visible from the current viewing direction.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_9',
        question: 'What is a title block?',
        options: ['Drawing border', 'Information section containing drawing details', 'Dimension area', 'Notes section'],
        correct: 'Information section containing drawing details',
        explanation: 'The title block contains important information like drawing title, scale, date, and drafter name.',
        difficulty: 'easy'
      },
      {
        id: 'draw_easy_10',
        question: 'What is drawing scale?',
        options: ['Drawing size', 'Ratio between drawing size and actual object size', 'Paper size', 'Line thickness'],
        correct: 'Ratio between drawing size and actual object size',
        explanation: 'Scale indicates the proportional relationship between the drawing and the actual object.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'draw_med_1',
        question: 'What is the difference between first angle and third angle projection?',
        options: ['No difference', 'Position of views relative to object differs', 'Only line types differ', 'Only scale differs'],
        correct: 'Position of views relative to object differs',
        explanation: 'First angle places views on opposite sides of the object from the observer; third angle places views on the same side.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_2',
        question: 'What is an auxiliary view?',
        options: ['Additional dimension', 'View showing true shape of inclined surface', 'Hidden feature', 'Section view'],
        correct: 'View showing true shape of inclined surface',
        explanation: 'Auxiliary views show the true shape and size of inclined or oblique surfaces.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_3',
        question: 'What is a section view?',
        options: ['External view', 'View showing internal features by cutting through object', 'Top view', 'Side view'],
        correct: 'View showing internal features by cutting through object',
        explanation: 'Section views reveal internal features by showing what would be seen if the object were cut through.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_4',
        question: 'What is hatching in technical drawing?',
        options: ['Line decoration', 'Pattern indicating cut surfaces in sections', 'Border design', 'Shading technique'],
        correct: 'Pattern indicating cut surfaces in sections',
        explanation: 'Hatching consists of parallel lines that indicate surfaces that have been cut in section views.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_5',
        question: 'What is isometric projection?',
        options: ['2D view', '3D drawing where three axes are equally inclined', 'Side view only', 'Top view only'],
        correct: '3D drawing where three axes are equally inclined',
        explanation: 'Isometric projection shows a 3D object with three axes equally inclined at 120° to each other.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_6',
        question: 'What angle are isometric axes drawn at?',
        options: ['90°', '120°', '30°', '45°'],
        correct: '30°',
        explanation: 'Isometric axes are drawn at 30° to the horizontal, creating the characteristic diamond shape.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_7',
        question: 'What is a detail view?',
        options: ['Overall view', 'Enlarged view of specific feature', 'Section view', 'Hidden view'],
        correct: 'Enlarged view of specific feature',
        explanation: 'Detail views show specific features at a larger scale for clarity and better understanding.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_8',
        question: 'What is geometric construction?',
        options: ['Building structures', 'Creating geometric shapes using compass and straightedge', 'Measuring angles', 'Drawing freehand'],
        correct: 'Creating geometric shapes using compass and straightedge',
        explanation: 'Geometric construction involves creating precise geometric shapes and relationships using basic tools.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_9',
        question: 'What is the purpose of break lines?',
        options: ['Show dimensions', 'Indicate where object is broken to save space', 'Show hidden features', 'Show center lines'],
        correct: 'Indicate where object is broken to save space',
        explanation: 'Break lines show where a long object has been shortened to fit on the drawing sheet.',
        difficulty: 'medium'
      },
      {
        id: 'draw_med_10',
        question: 'What is perspective drawing?',
        options: ['Flat 2D view', 'Drawing showing depth as human eye sees it', 'Technical projection', 'Orthographic view'],
        correct: 'Drawing showing depth as human eye sees it',
        explanation: 'Perspective drawing creates the illusion of depth and distance as perceived by human vision.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'draw_hard_1',
        question: 'What is the principle behind descriptive geometry?',
        options: ['Artistic representation', 'Mathematical basis for solving 3D problems using 2D projections', 'Decorative drawing', 'Freehand sketching'],
        correct: 'Mathematical basis for solving 3D problems using 2D projections',
        explanation: 'Descriptive geometry provides mathematical methods for solving 3D spatial problems using 2D projections.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_2',
        question: 'What is a development in technical drawing?',
        options: ['3D model', 'Flat pattern of a 3D object when unfolded', 'Section view', 'Assembly drawing'],
        correct: 'Flat pattern of a 3D object when unfolded',
        explanation: 'A development shows the flat pattern of a 3D object as it would appear if unfolded onto a plane.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_3',
        question: 'What is the difference between parallel and radial line development?',
        options: ['No difference', 'Parallel: for prisms/cylinders, Radial: for pyramids/cones', 'Only complexity differs', 'Only application differs'],
        correct: 'Parallel: for prisms/cylinders, Radial: for pyramids/cones',
        explanation: 'Parallel development is used for objects with parallel elements (prisms, cylinders); radial for objects with converging elements (pyramids, cones).',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_4',
        question: 'What is intersection of solids?',
        options: ['Separate objects', 'Line or curve where two solids meet', 'Assembly method', 'Joining technique'],
        correct: 'Line or curve where two solids meet',
        explanation: 'Intersection of solids determines the line or curve where two geometric solids meet or penetrate each other.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_5',
        question: 'What is true length of a line in descriptive geometry?',
        options: ['Measured length', 'Actual length regardless of projection distortion', 'Apparent length', 'Scaled length'],
        correct: 'Actual length regardless of projection distortion',
        explanation: 'True length is the actual length of a line in space, undistorted by projection.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_6',
        question: 'What is a plane of projection?',
        options: ['Drawing paper', 'Imaginary plane onto which object is projected', 'Object surface', 'Viewing screen'],
        correct: 'Imaginary plane onto which object is projected',
        explanation: 'A plane of projection is an imaginary transparent plane onto which the image of an object is projected.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_7',
        question: 'What is edge view of a plane?',
        options: ['Surface view', 'View where plane appears as a line', '3D perspective', 'Isometric view'],
        correct: 'View where plane appears as a line',
        explanation: 'Edge view shows a plane as a straight line when viewed perpendicular to the plane.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_8',
        question: 'What is revolution in descriptive geometry?',
        options: ['Circular motion', 'Rotating object or projection plane to obtain desired view', 'Political change', 'Tool rotation'],
        correct: 'Rotating object or projection plane to obtain desired view',
        explanation: 'Revolution involves rotating an object or projection plane to obtain true measurements or desired views.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_9',
        question: 'What is piercing point?',
        options: ['Sharp end', 'Point where line intersects a plane', 'Center point', 'Vanishing point'],
        correct: 'Point where line intersects a plane',
        explanation: 'A piercing point is the exact location where a line passes through or intersects a plane.',
        difficulty: 'hard'
      },
      {
        id: 'draw_hard_10',
        question: 'What is visibility in technical drawing?',
        options: ['Line darkness', 'Determining which lines are visible in a view', 'Drawing clarity', 'Paper quality'],
        correct: 'Determining which lines are visible in a view',
        explanation: 'Visibility analysis determines which edges and surfaces are visible or hidden in any given view.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_cad_basics',
    name: 'Grade 11: Computer-Aided Design (CAD) Basics',
    description: 'Introduction to CAD software and digital drawing techniques',
    questions: [
      // Easy Questions (10)
      {
        id: 'g11_cad_easy_1',
        question: 'What does CAD stand for?',
        options: ['Computer Added Design', 'Computer-Aided Design', 'Creative Art Design', 'Computer Art Development'],
        correct: 'Computer-Aided Design',
        explanation: 'CAD stands for Computer-Aided Design, using computers to create technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_2',
        question: 'What is the main advantage of CAD over manual drafting?',
        options: ['Cheaper tools', 'Faster modification and precision', 'Better paper', 'Simpler process'],
        correct: 'Faster modification and precision',
        explanation: 'CAD allows quick modifications, precise measurements, and easy copying/scaling of drawings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_3',
        question: 'What is a coordinate system in CAD?',
        options: ['Drawing border', 'Reference system for locating points', 'Tool palette', 'Layer system'],
        correct: 'Reference system for locating points',
        explanation: 'A coordinate system provides a reference framework for precisely locating points in CAD.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_4',
        question: 'What are layers in CAD?',
        options: ['Drawing sheets', 'Organizational tool for grouping objects', 'Software versions', 'File formats'],
        correct: 'Organizational tool for grouping objects',
        explanation: 'Layers help organize drawings by grouping related objects that can be controlled together.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_5',
        question: 'What is snap in CAD?',
        options: ['Quick save', 'Feature that helps cursor lock to specific points', 'Sound effect', 'View change'],
        correct: 'Feature that helps cursor lock to specific points',
        explanation: 'Snap helps the cursor automatically lock to specific points, lines, or features for precision.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_6',
        question: 'What is zoom in CAD?',
        options: ['Speed increase', 'Changing view magnification', 'Tool selection', 'File compression'],
        correct: 'Changing view magnification',
        explanation: 'Zoom allows users to magnify or reduce the view of the drawing for detailed work or overview.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_7',
        question: 'What is pan in CAD?',
        options: ['Cooking tool', 'Moving the view without changing zoom', 'Drawing circle', 'File format'],
        correct: 'Moving the view without changing zoom',
        explanation: 'Pan allows users to move the view of the drawing without changing the zoom level.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_8',
        question: 'What is object selection in CAD?',
        options: ['Choosing colors', 'Picking objects to modify', 'Tool selection', 'Layer selection'],
        correct: 'Picking objects to modify',
        explanation: 'Object selection involves choosing specific objects or elements to perform operations on them.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_9',
        question: 'What is copy command used for?',
        options: ['Deleting objects', 'Duplicating selected objects', 'Moving objects', 'Rotating objects'],
        correct: 'Duplicating selected objects',
        explanation: 'The copy command creates duplicates of selected objects at specified locations.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_10',
        question: 'What is undo command used for?',
        options: ['Saving file', 'Reversing the last action', 'Opening file', 'Printing drawing'],
        correct: 'Reversing the last action',
        explanation: 'Undo reverses the most recent action, allowing users to correct mistakes.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g11_cad_med_1',
        question: 'What is the difference between absolute and relative coordinates?',
        options: ['No difference', 'Absolute: from origin, Relative: from last point', 'Only units differ', 'Only precision differs'],
        correct: 'Absolute: from origin, Relative: from last point',
        explanation: 'Absolute coordinates are measured from the origin (0,0), while relative coordinates are measured from the previous point.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_2',
        question: 'What is object snap (OSNAP)?',
        options: ['Quick save', 'Precise snap to specific geometric points', 'Object breaking', 'Fast selection'],
        correct: 'Precise snap to specific geometric points',
        explanation: 'Object snap allows precise cursor positioning to specific geometric points like endpoints, midpoints, centers.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_3',
        question: 'What is trim command used for?',
        options: ['Adding objects', 'Cutting objects at intersection points', 'Moving objects', 'Copying objects'],
        correct: 'Cutting objects at intersection points',
        explanation: 'Trim removes portions of objects up to specified cutting edges or boundaries.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_4',
        question: 'What is extend command used for?',
        options: ['Shortening objects', 'Lengthening objects to meet boundaries', 'Rotating objects', 'Scaling objects'],
        correct: 'Lengthening objects to meet boundaries',
        explanation: 'Extend lengthens objects to meet specified boundary edges.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_5',
        question: 'What is fillet command used for?',
        options: ['Creating sharp corners', 'Creating rounded corners between lines', 'Drawing circles', 'Creating text'],
        correct: 'Creating rounded corners between lines',
        explanation: 'Fillet creates rounded corners or arcs between two intersecting lines.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_6',
        question: 'What is chamfer command used for?',
        options: ['Creating rounded corners', 'Creating angled cuts at corners', 'Drawing parallel lines', 'Creating circles'],
        correct: 'Creating angled cuts at corners',
        explanation: 'Chamfer creates angled cuts or beveled edges at corners between two lines.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_7',
        question: 'What is polar coordinate system?',
        options: ['Rectangular system', 'System using distance and angle', 'Grid system', 'Layer system'],
        correct: 'System using distance and angle',
        explanation: 'Polar coordinates specify points using distance from origin and angle from reference direction.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_8',
        question: 'What is mirror command used for?',
        options: ['Copying objects', 'Creating symmetrical copies across a line', 'Rotating objects', 'Scaling objects'],
        correct: 'Creating symmetrical copies across a line',
        explanation: 'Mirror creates symmetrical copies of objects across a specified mirror line or axis.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_9',
        question: 'What is array command used for?',
        options: ['Single copy', 'Creating multiple copies in patterns', 'Deleting objects', 'Changing colors'],
        correct: 'Creating multiple copies in patterns',
        explanation: 'Array creates multiple copies of objects arranged in rectangular or circular patterns.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_10',
        question: 'What is scale command used for?',
        options: ['Moving objects', 'Changing object size proportionally', 'Rotating objects', 'Copying objects'],
        correct: 'Changing object size proportionally',
        explanation: 'Scale changes the size of objects proportionally while maintaining their shape.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_cad_hard_1',
        question: 'What is parametric modeling?',
        options: ['Free-form modeling', 'Modeling using dimensions and constraints', 'Surface modeling', 'Mesh modeling'],
        correct: 'Modeling using dimensions and constraints',
        explanation: 'Parametric modeling uses dimensions and geometric constraints to define and control model geometry.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_2',
        question: 'What is associative dimensioning?',
        options: ['Fixed dimensions', 'Dimensions that update with geometry changes', 'Manual dimensions', 'Text annotations'],
        correct: 'Dimensions that update with geometry changes',
        explanation: 'Associative dimensions automatically update when the associated geometry is modified.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_3',
        question: 'What is a block in CAD?',
        options: ['Solid object', 'Group of objects treated as single unit', 'Layer group', 'File format'],
        correct: 'Group of objects treated as single unit',
        explanation: 'A block is a collection of objects grouped together and treated as a single unit for insertion and manipulation.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_4',
        question: 'What is NURBS?',
        options: ['Drawing tool', 'Non-Uniform Rational B-Splines for smooth curves', 'Layer type', 'File format'],
        correct: 'Non-Uniform Rational B-Splines for smooth curves',
        explanation: 'NURBS (Non-Uniform Rational B-Splines) is a mathematical model for generating smooth curves and surfaces.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_5',
        question: 'What is feature-based modeling?',
        options: ['Random modeling', 'Building models using predefined geometric features', 'Surface modeling only', 'Wireframe modeling'],
        correct: 'Building models using predefined geometric features',
        explanation: 'Feature-based modeling builds 3D models by combining predefined geometric features like extrusions, cuts, and holes.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_6',
        question: 'What is Boolean operation in CAD?',
        options: ['Logic operation', 'Combining solids through union, subtraction, intersection', 'Drawing operation', 'Text operation'],
        correct: 'Combining solids through union, subtraction, intersection',
        explanation: 'Boolean operations combine solid objects through mathematical operations like union, subtraction, and intersection.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_7',
        question: 'What is wireframe modeling?',
        options: ['Solid modeling', 'Representing objects using lines and curves only', 'Surface modeling', 'Rendered modeling'],
        correct: 'Representing objects using lines and curves only',
        explanation: 'Wireframe modeling represents 3D objects using only lines and curves to show edges and boundaries.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_8',
        question: 'What is surface modeling?',
        options: ['Line modeling', 'Creating 3D objects using surfaces without thickness', 'Solid modeling', 'Text modeling'],
        correct: 'Creating 3D objects using surfaces without thickness',
        explanation: 'Surface modeling creates 3D representations using surfaces that define the boundary of objects without interior volume.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_9',
        question: 'What is solid modeling?',
        options: ['Surface only', 'Creating 3D objects with complete volume and mass properties', 'Line modeling', 'Wireframe modeling'],
        correct: 'Creating 3D objects with complete volume and mass properties',
        explanation: 'Solid modeling creates complete 3D objects with defined volume, mass, and material properties.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_10',
        question: 'What is constraint-based sketching?',
        options: ['Free sketching', 'Sketching controlled by geometric and dimensional constraints', 'Manual sketching', 'Random sketching'],
        correct: 'Sketching controlled by geometric and dimensional constraints',
        explanation: 'Constraint-based sketching uses geometric relationships and dimensions to control and define sketch geometry.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_engineering_drawing',
    name: 'Grade 12: Engineering Drawing Applications',
    description: 'Advanced technical drawing for engineering applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_eng_easy_1',
        question: 'What is an assembly drawing?',
        options: ['Part drawing', 'Drawing showing how parts fit together', 'Detail drawing', 'Sketch drawing'],
        correct: 'Drawing showing how parts fit together',
        explanation: 'Assembly drawings show how individual parts are assembled together to create a complete product.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_2',
        question: 'What is a detail drawing?',
        options: ['Assembly view', 'Complete drawing of individual part with dimensions', 'Exploded view', 'Sketch'],
        correct: 'Complete drawing of individual part with dimensions',
        explanation: 'Detail drawings provide complete information needed to manufacture individual parts.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_3',
        question: 'What is a working drawing?',
        options: ['Rough sketch', 'Complete drawing set for manufacturing', 'Artistic drawing', 'Preliminary drawing'],
        correct: 'Complete drawing set for manufacturing',
        explanation: 'Working drawings provide all information needed to manufacture and assemble a product.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_4',
        question: 'What is a bill of materials (BOM)?',
        options: ['Drawing border', 'List of parts and materials needed', 'Title block', 'Dimension list'],
        correct: 'List of parts and materials needed',
        explanation: 'A BOM lists all parts, materials, and quantities needed to manufacture the product.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_5',
        question: 'What is tolerance in engineering drawing?',
        options: ['Exact dimension', 'Allowable variation in dimensions', 'Drawing scale', 'Line type'],
        correct: 'Allowable variation in dimensions',
        explanation: 'Tolerance specifies the acceptable range of variation in manufactured dimensions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_6',
        question: 'What is surface finish?',
        options: ['Drawing completion', 'Quality of machined surface texture', 'Color application', 'Final inspection'],
        correct: 'Quality of machined surface texture',
        explanation: 'Surface finish specifies the texture and quality requirements for machined surfaces.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_7',
        question: 'What is geometric dimensioning and tolerancing (GD&T)?',
        options: ['Basic dimensioning', 'System for specifying geometry and tolerance', 'Drawing style', 'CAD feature'],
        correct: 'System for specifying geometry and tolerance',
        explanation: 'GD&T is a standardized system for defining and communicating engineering tolerances.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_8',
        question: 'What is a datum in GD&T?',
        options: ['Dimension', 'Reference point, line, or plane', 'Tolerance', 'Feature'],
        correct: 'Reference point, line, or plane',
        explanation: 'A datum is a theoretically perfect reference from which measurements are made.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_9',
        question: 'What is a feature control frame?',
        options: ['Drawing border', 'Box containing GD&T symbols and values', 'Title block', 'Dimension box'],
        correct: 'Box containing GD&T symbols and values',
        explanation: 'Feature control frames contain geometric tolerance symbols, values, and datum references.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eng_easy_10',
        question: 'What is an exploded view?',
        options: ['Damaged assembly', 'Assembly shown with parts separated', 'Section view', 'Detail view'],
        correct: 'Assembly shown with parts separated',
        explanation: 'Exploded views show assembly components separated along their assembly axes.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_eng_med_1',
        question: 'What is the difference between bilateral and unilateral tolerance?',
        options: ['No difference', 'Bilateral: ±, Unilateral: + or - only', 'Only symbols differ', 'Only applications differ'],
        correct: 'Bilateral: ±, Unilateral: + or - only',
        explanation: 'Bilateral tolerance allows variation in both directions (±); unilateral allows variation in one direction only.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_2',
        question: 'What is maximum material condition (MMC)?',
        options: ['Minimum size', 'Condition when part contains maximum material', 'Average size', 'Variable condition'],
        correct: 'Condition when part contains maximum material',
        explanation: 'MMC is when a feature contains the maximum amount of material within size limits.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_3',
        question: 'What is least material condition (LMC)?',
        options: ['Maximum size', 'Condition when part contains minimum material', 'Average size', 'Variable condition'],
        correct: 'Condition when part contains minimum material',
        explanation: 'LMC is when a feature contains the minimum amount of material within size limits.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_4',
        question: 'What is form tolerance?',
        options: ['Size tolerance', 'Tolerance controlling shape of individual features', 'Position tolerance', 'Orientation tolerance'],
        correct: 'Tolerance controlling shape of individual features',
        explanation: 'Form tolerances control the shape of individual features like straightness, flatness, roundness.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_5',
        question: 'What is orientation tolerance?',
        options: ['Form tolerance', 'Tolerance controlling angular relationship to datum', 'Position tolerance', 'Size tolerance'],
        correct: 'Tolerance controlling angular relationship to datum',
        explanation: 'Orientation tolerances control angular relationships between features and datums.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_6',
        question: 'What is position tolerance?',
        options: ['Size tolerance', 'Tolerance defining acceptable location variation', 'Form tolerance', 'Orientation tolerance'],
        correct: 'Tolerance defining acceptable location variation',
        explanation: 'Position tolerance defines the acceptable variation in location of features.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_7',
        question: 'What is runout tolerance?',
        options: ['Static tolerance', 'Tolerance controlling surface variation during rotation', 'Form tolerance', 'Size tolerance'],
        correct: 'Tolerance controlling surface variation during rotation',
        explanation: 'Runout tolerance controls how much a surface can vary as the part is rotated about an axis.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_8',
        question: 'What is a thread specification?',
        options: ['Material type', 'Complete description of screw thread characteristics', 'Surface finish', 'Tolerance specification'],
        correct: 'Complete description of screw thread characteristics',
        explanation: 'Thread specifications define pitch, diameter, thread form, and other threading characteristics.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_9',
        question: 'What is welding symbol?',
        options: ['Material symbol', 'Symbol indicating welding requirements', 'Tolerance symbol', 'Surface symbol'],
        correct: 'Symbol indicating welding requirements',
        explanation: 'Welding symbols specify the type, size, and location of welds on drawings.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eng_med_10',
        question: 'What is a revision cloud?',
        options: ['Weather symbol', 'Mark showing areas changed in drawing', 'Cloud storage', 'CAD feature'],
        correct: 'Mark showing areas changed in drawing',
        explanation: 'Revision clouds highlight areas of drawings that have been changed or revised.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_eng_hard_1',
        question: 'What is statistical tolerancing?',
        options: ['Random tolerancing', 'Tolerancing method using statistical analysis', 'Basic tolerancing', 'Traditional tolerancing'],
        correct: 'Tolerancing method using statistical analysis',
        explanation: 'Statistical tolerancing uses statistical methods to analyze tolerance accumulation and improve quality.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_2',
        question: 'What is profile tolerance?',
        options: ['Surface finish', 'Tolerance controlling overall shape of features', 'Size tolerance', 'Position tolerance'],
        correct: 'Tolerance controlling overall shape of features',
        explanation: 'Profile tolerance controls the overall shape of features, combining form, orientation, and location.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_3',
        question: 'What is the concept of virtual condition?',
        options: ['Imaginary state', 'Worst-case boundary of feature', 'Perfect condition', 'Average condition'],
        correct: 'Worst-case boundary of feature',
        explanation: 'Virtual condition represents the worst-case boundary of a feature considering size and geometric tolerances.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_4',
        question: 'What is bonus tolerance?',
        options: ['Extra tolerance', 'Additional tolerance when feature departs from MMC', 'Reduced tolerance', 'Standard tolerance'],
        correct: 'Additional tolerance when feature departs from MMC',
        explanation: 'Bonus tolerance allows additional geometric tolerance when a feature departs from its MMC size.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_5',
        question: 'What is datum shift?',
        options: ['Datum movement', 'Movement of datum due to feature size variation', 'Fixed datum', 'Datum rotation'],
        correct: 'Movement of datum due to feature size variation',
        explanation: 'Datum shift occurs when datum features vary in size, affecting the location of the datum reference frame.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_6',
        question: 'What is compound tolerance?',
        options: ['Simple tolerance', 'Multiple tolerances applied to same feature', 'Single tolerance', 'Basic tolerance'],
        correct: 'Multiple tolerances applied to same feature',
        explanation: 'Compound tolerances involve multiple geometric tolerances applied to control different aspects of the same feature.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_7',
        question: 'What is projected tolerance zone?',
        options: ['Surface zone', 'Tolerance zone extended beyond feature surface', 'Internal zone', 'Fixed zone'],
        correct: 'Tolerance zone extended beyond feature surface',
        explanation: 'Projected tolerance zones extend beyond the surface of a feature to control mating part clearance.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_8',
        question: 'What is simultaneous requirements in GD&T?',
        options: ['Sequential requirements', 'Multiple tolerances that must be met together', 'Individual requirements', 'Optional requirements'],
        correct: 'Multiple tolerances that must be met together',
        explanation: 'Simultaneous requirements indicate that multiple geometric tolerances must be satisfied simultaneously.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_9',
        question: 'What is free state variation?',
        options: ['Constrained state', 'Dimensional changes in flexible parts when unconstrained', 'Rigid state', 'Fixed state'],
        correct: 'Dimensional changes in flexible parts when unconstrained',
        explanation: 'Free state variation accounts for dimensional changes in flexible parts when not constrained by fixtures.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eng_hard_10',
        question: 'What is coordinate measuring machine (CMM) programming?',
        options: ['Manual measurement', 'Automated measurement programming for quality control', 'Visual inspection', 'Simple measurement'],
        correct: 'Automated measurement programming for quality control',
        explanation: 'CMM programming creates automated measurement routines to verify dimensional and geometric tolerances.',
        difficulty: 'hard'
      }
    ]
  }
];
