import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import {
  Page,
  Card,
  BrandMark,
  Byline,
  BodyText,
  Divider,
  ButtonRow,
  FooterRow,
  TextButton,
} from './AuthCard'
import { tokens } from '../tokens'

const ConsentCard = styled(Card)`
  /* 31/39 so outer edge → content reads 32/40 with the 1px border */
  padding: ${tokens.space.consentPadTop}px ${tokens.space.consentPadX}px
    ${tokens.space.consentPadBottom}px;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
`

/** Full-bleed across the modal */
const ConsentDivider = styled(Divider)`
  margin-top: ${tokens.space.section}px;
  margin-bottom: ${tokens.space.section}px;
  margin-left: -${tokens.space.consentPadX}px;
  margin-right: -${tokens.space.consentPadX}px;
  width: calc(100% + ${tokens.space.consentPadX * 2}px);
`

/** Full-bleed; 32px below content, 32px above bottom actions */
const ActionsDivider = styled(ConsentDivider)`
  margin-top: 32px;
  margin-bottom: 32px;
`

const ConsentActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.space.buttonGap}px;
  margin-top: 0;
`

const ConsentFooter = styled(FooterRow)`
  margin-top: 0;
  flex: 1;
  min-width: 0;
`

const ConsentButtonRow = styled(ButtonRow)`
  margin-top: 0;
  flex-shrink: 0;
`

const Heading = styled.h1`
  margin: ${tokens.space.stack}px 0 0;
  color: ${tokens.fg.default};
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
`

const PermissionBlock = styled.div`
  /* First block: 12px under “This application would be able to:” */
  margin-top: 12px;

  & + & {
    margin-top: 20px;
  }
`

const PermissionTitle = styled.p`
  margin: 0;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.bodyBold.size}px;
  line-height: ${tokens.type.bodyBold.lineHeight};
  font-weight: ${tokens.type.bodyBold.weight};
`

const PermissionBullets = styled.ul`
  margin: 4px 0 0;
  padding-left: 20px;
  list-style: disc;
  color: ${tokens.fg.default};
`

const PermissionDetail = styled.li`
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};

  &::marker {
    color: ${tokens.fg.default};
  }
`

const PermissionBody = styled.p`
  margin: 4px 0 0;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
`

const OutlineButton = styled(Button)`
  && {
    background-color: ${tokens.bg.surface};
    border: 1px solid ${tokens.fg.primary};
    color: ${tokens.fg.primary};

    &:hover {
      background-color: ${tokens.bg.page};
      border-color: #284173;
      color: #284173;
    }
  }
`

const PERMISSIONS = [
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

const USER_NAME = 'Alex Rivera'

/**
 * @param {{ onBack?: () => void, listStyle?: 'bullets' | 'plain' }} props
 */
export function ConsentScreen({ onBack, listStyle = 'bullets' }) {
  return (
    <Page>
      <ConsentCard $width={tokens.consentCardWidth}>
        <BrandMark>Pi</BrandMark>
        <Byline>by Z3n Tests</Byline>
        <Heading>Allow Pi to access your Zendesk account?</Heading>
        <BodyText>Testing out with Pi</BodyText>
        <ConsentDivider />
        <BodyText style={{ marginTop: 0 }}>
          This application would be able to:
        </BodyText>
        {PERMISSIONS.map((item) => (
          <PermissionBlock key={item.title}>
            <PermissionTitle>{item.title}</PermissionTitle>
            {listStyle === 'plain' ? (
              <PermissionBody>{item.detail}</PermissionBody>
            ) : (
              <PermissionBullets>
                <PermissionDetail>{item.detail}</PermissionDetail>
              </PermissionBullets>
            )}
          </PermissionBlock>
        ))}
        <ActionsDivider />
        <ConsentActions>
          <ConsentFooter>
            <span>Not {USER_NAME}?</span>
            <TextButton type="button" onClick={onBack}>
              Sign in as a different user
            </TextButton>
          </ConsentFooter>
          <ConsentButtonRow>
            <OutlineButton type="button" onClick={onBack}>
              Deny
            </OutlineButton>
            <Button isPrimary type="button" onClick={onBack}>
              Allow
            </Button>
          </ConsentButtonRow>
        </ConsentActions>
      </ConsentCard>
    </Page>
  )
}
