/** Original consent permissions (shorter list) */
export const PERMISSIONS_SHORT = [
  {
    title: 'Create, edit, and delete tickets',
    detail:
      'Includes adding comments, adding and removing tags, merging tickets, marking tickets as spam, attaching uploaded files, managing ticket forms and custom statuses, and permanently deleting tickets.',
  },
  {
    title: 'Create, edit, and delete users and manage their access',
    detail:
      'Includes resetting passwords, ending active sessions, adding and verifying identities, changing group, organization, and brand memberships, and managing custom roles.',
  },
  {
    title: 'View account settings',
    detail:
      'Includes account configuration, ticket and user fields, and workspaces',
  },
  {
    title: 'View groups',
    detail: 'Includes viewing groups and their memberships',
  },
  {
    title: 'View tickets',
    detail:
      'Includes ticket contents, comments and conversation history, tags, forms and fields, audits, events, and metrics.',
  },
  {
    title: 'View users',
    detail:
      'Includes their identities, active sessions, group, organization, and brand memberships, roles, and settings.',
  },
]

/** Version 2 — long consent body (plain text, no bullets) */
export const PERMISSIONS_LONG = [
  {
    title: 'View data across Zendesk',
    detail:
      'Can view information available through Zendesk APIs, including tickets, users, organizations, Help Center content, and account settings. This is broad access and may include related records returned with other data.',
  },
  {
    title: 'Read all accounts data',
    detail: null,
  },
  {
    title: 'View installed apps and their settings',
    detail:
      'Includes which apps are installed in the account and each app’s settings.',
  },
  {
    title: 'View audit logs',
    detail:
      'Includes the account-wide record of changes: who changed what and when.',
  },
  {
    title: 'View automations',
    detail: 'Includes viewing automations and their details.',
  },
  {
    title: 'View brands',
    detail: 'Includes viewing brands and their agent assignments.',
  },
  {
    title: 'View groups',
    detail: 'Includes viewing groups and their memberships.',
  },
  {
    title: 'View help center content',
    detail:
      'Includes articles, sections, categories, community posts and comments.',
  },
  {
    title: 'View macros',
    detail:
      'Includes viewing macros, their categories, and their attachments.',
  },
  {
    title: 'View support requests',
    detail: 'Includes submitted requests and their comments.',
  },
  {
    title: 'View security and sign-in settings',
    detail:
      'Includes password policy, session timeouts, IP restrictions, and single sign-on configuration.',
  },
  {
    title: 'View SLA policies',
    detail: 'Includes viewing SLA and group SLA policies.',
  },
  {
    title: 'View targets and their delivery failures',
    detail:
      'Includes viewing targets and any failures when notifications were sent.',
  },
  {
    title: 'View Guide themes',
    detail: 'Includes the help center’s themes and their files.',
  },
  {
    title: 'View ticket views',
    detail: 'Includes viewing views and the tickets they return.',
  },
  {
    title: 'View tickets',
    detail:
      'Includes ticket contents, comments and conversation history, tags, forms and fields, audits, events, and metrics.',
  },
  {
    title: 'View triggers',
    detail:
      'Includes viewing triggers, trigger categories, and their revision history.',
  },
  {
    title: 'View users',
    detail:
      'Includes their identities, active sessions, group, organization, and brand memberships, roles, and settings.',
  },
  {
    title: 'View webhooks',
    detail: 'Includes webhook configurations and their activity history.',
  },
  {
    title: 'View private integrations',
    detail:
      'Includes integration configurations, connections, and inbound webhooks.',
  },
]
