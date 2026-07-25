##
src
│
├── assets
│   ├── images
│   ├── icons
│   ├── logo
│   └── animations
│
├── components                     # Reusable across entire project
│
│   ├── common
│   │   ├── Button
│   │   ├── Input
│   │   ├── Select
│   │   ├── SearchBar
│   │   ├── Modal
│   │   ├── Drawer
│   │   ├── Loader
│   │   ├── EmptyState
│   │   ├── ConfirmDialog
│   │   ├── Pagination
│   │   └── DataTable
│   │
│   ├── layout
│   │   ├── Navbar
│   │   ├── Sidebar
│   │   ├── Footer
│   │   ├── DashboardLayout
│   │   ├── ProtectedRoute
│   │   └── PageHeader
│   │
│   └── ui
│       ├── Badge
│       ├── Card
│       ├── Tabs
│       ├── Avatar
│       ├── Timeline
│       ├── ProgressBar
│       ├── StatCard
│       └── StatusChip
│
├── features
│
│   ├── auth
│   │
│   │   ├── pages
│   │   │      LoginPage.jsx
│   │   │      SignupPage.jsx
│   │   │
│   │   ├── components
│   │   │      LoginForm.jsx
│   │   │      SignupForm.jsx
│   │   │
│   │   ├── hooks
│   │   │      useAuth.js
│   │   │
│   │   ├── services
│   │   │      auth.service.js
│   │   │
│   │   └── validation
│   │
│   ├── landing
│   │
│   │   ├── pages
│   │   │      LandingPage.jsx
│   │   │
│   │   └── components
│   │          HeroSection
│   │          FeatureSection
│   │          CTASection
│   │          VolunteerSection
│   │          OrganisationSection
│   │          FooterSection
│   │
│   ├── organization
│   │
│   │   ├── dashboard
│   │   │      DashboardPage.jsx
│   │   │
│   │   ├── events
│   │   │
│   │   │      pages
│   │   │          CreateEventPage.jsx
│   │   │          EventDetailsPage.jsx
│   │   │          PreviousEventsPage.jsx
│   │   │
│   │   │      components
│   │   │          EventCard
│   │   │          EventForm
│   │   │          PositionCard
│   │   │          PositionModal
│   │   │          EventTimeline
│   │   │          AssignManagerModal
│   │   │
│   │   │      hooks
│   │   │
│   │   │      services
│   │   │
│   │   ├── staff
│   │   │
│   │   │      pages
│   │   │          StaffManagementPage.jsx
│   │   │
│   │   │      components
│   │   │          StaffCard
│   │   │          StaffProfileDrawer
│   │   │          InviteStaffModal
│   │   │          AssignEventModal
│   │   │
│   │   ├── verification
│   │   │
│   │   └── tracker
│   │
│   ├── manager
│   │
│   │   ├── dashboard
│   │   │
│   │   ├── applications
│   │   │
│   │   │      pages
│   │   │          ManagerApplicationsPage.jsx
│   │   │
│   │   │      components
│   │   │          EventHeader
│   │   │          SearchToolbar
│   │   │          RoleApplicationSection
│   │   │          VolunteerTable
│   │   │          VolunteerProfileDrawer
│   │   │          ApproveModal
│   │   │          RejectModal
│   │   │
│   │   ├── attendance
│   │   │
│   │   ├── volunteers
│   │   │
│   │   ├── communication
│   │   │
│   │   └── liveOperations
│   │
│   ├── volunteer
│   │
│   │   ├── home
│   │   │
│   │   ├── dashboard
│   │   │
│   │   ├── events
│   │   │
│   │   │      pages
│   │   │          VolunteerEventsPage.jsx
│   │   │
│   │   │      components
│   │   │          EventCard
│   │   │          EventTabs
│   │   │          EventDetailsModal
│   │   │          ApplyModal
│   │   │          CertificateModal
│   │   │          MessageModal
│   │   │
│   │   ├── invitations
│   │   │
│   │   │      pages
│   │   │          VolunteerInvitationsPage.jsx
│   │   │
│   │   │      components
│   │   │          InvitationCard
│   │   │          InvitationTabs
│   │   │          InvitationSearch
│   │   │          InvitationStats
│   │   │
│   │   ├── certificates
│   │   │
│   │   └── profile
│   │
│   ├── notifications
│   │
│   └── reports
│
├── services
│   ├── api.js
│   ├── axios.js
│   └── socket.js
│
├── hooks
│   ├── useDebounce.js
│   ├── usePagination.js
│   ├── useLocalStorage.js
│   └── useSocket.js
│
├── context
│   ├── AuthContext.jsx
│   ├── NotificationContext.jsx
│   ├── ThemeContext.jsx
│   └── SocketContext.jsx
│
├── utils
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   ├── date.js
│   └── permissions.js
│
├── routes
│   ├── AppRoutes.jsx
│   ├── OrganizationRoutes.jsx
│   ├── ManagerRoutes.jsx
│   ├── VolunteerRoutes.jsx
│   └── AuthRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css