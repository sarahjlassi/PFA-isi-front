import { RouteInfo } from './sidebar.metadata';
//Sidebar menu Routes and data
test : Boolean;
export const ROUTES: RouteInfo[] = [

    { 
        path: '/tables/smart', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false,submenu: [] ,
    
      },
       {

            path: '/uikit/grids', title: 'Réservation salle', icon: 'ft-aperture', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] ,
           

        
    },
   
  /*  {
        path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '', title: 'Bootstrap', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tables', title: 'Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/select', title: 'Select', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/editor', title: 'Editor', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tags', title: 'Input Tags', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/switch', title: 'Switch', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/form-actions', title: 'Form Actions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/bordered', title: 'Bordered Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/striped-rows', title: 'Striped Rows', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
           
           
            { path: '/forms/archwizard', title: 'ArchWizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
   
    {
        path: '', title: 'Data Tables', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/datatables/basic', title: 'Basic', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/editing', title: 'Editing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/filter', title: 'Filter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/fullscreen', title: 'Fullscreen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/paging', title: 'Paging', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/pinning', title: 'Pinning', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/selection', title: 'Selection', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/sorting', title: 'Sorting', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    
    {
        path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
           
          
            { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
            { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },*/
];
