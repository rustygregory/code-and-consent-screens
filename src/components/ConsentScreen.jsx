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
import { PERMISSIONS_SHORT, PERMISSIONS_LONG } from '../data/permissions'

const ConsentCard = styled(Card)`
  /* 31/39 so outer edge → content reads 32/40 with the 1px border */
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: hidden;
  padding: ${tokens.space.consentPadTop}px ${tokens.space.consentPadX}px
    ${tokens.space.consentPadBottom}px;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
`

const ConsentHeader = styled.div`
  flex-shrink: 0;
`

/** Scrolls between the title divider and the bottom-nav divider.
 *  Scrollbar sits 4px from the modal’s right edge (outside content margins). */
const ConsentScrollBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: calc(-${tokens.space.consentPadX}px + 4px);
  padding-right: calc(${tokens.space.consentPadX}px - 4px);
  box-sizing: border-box;
`

const ConsentFooterBar = styled.div`
  flex-shrink: 0;
`

/** Full-bleed line under the title block — flush to the scroll edge */
const ConsentDivider = styled(Divider)`
  margin-top: ${tokens.space.section}px;
  margin-bottom: 0;
  margin-left: -${tokens.space.consentPadX}px;
  margin-right: -${tokens.space.consentPadX}px;
  width: calc(100% + ${tokens.space.consentPadX * 2}px);
`

/** Full-bleed line above the bottom nav — flush to the scroll edge */
const ActionsDivider = styled(ConsentDivider)`
  margin-top: 0;
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

const SecureSignInTitle = styled.p`
  margin: ${tokens.space.tight}px 0 0;
  color: ${tokens.fg.default};
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`

const DeviceCodeLine = styled(BodyText)`
  margin-top: 0;
`

const PermissionBlock = styled.div`
  /* First block: 12px under “This application would be able to:” */
  margin-top: 12px;

  & + & {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 0;
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
  margin: 0;
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
  margin: 0;
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

const USER_NAME = 'Alex Rivera'

/**
 * @param {{
 *   onBack?: () => void,
 *   listStyle?: 'bullets' | 'plain',
 *   permissions?: 'short' | 'long',
 * }} props
 */
export function ConsentScreen({
  onBack,
  listStyle = 'bullets',
  permissions = 'short',
}) {
  const items =
    permissions === 'long' ? PERMISSIONS_LONG : PERMISSIONS_SHORT

  return (
    <Page>
      <ConsentCard $width={tokens.consentCardWidth}>
        <ConsentHeader>
          <BrandMark>Pi</BrandMark>
          <Byline>by Z3n Tests</Byline>
          <Heading>Allow Pi to access your Zendesk account?</Heading>
          <BodyText style={{ marginTop: 4 }}>Testing out with Pi</BodyText>
          <SecureSignInTitle>Secure connection</SecureSignInTitle>
          <DeviceCodeLine>
            Make sure this code matches the one displayed on your device:{' '}
            <strong>1234</strong>
          </DeviceCodeLine>
          <ConsentDivider />
        </ConsentHeader>

        <ConsentScrollBody>
          <BodyText as="div" style={{ marginTop: 0, marginBottom: 0 }}>
            This application would be able to:
          </BodyText>
          {items.map((item) => (
            <PermissionBlock key={item.title}>
              <PermissionTitle>{item.title}</PermissionTitle>
              {item.detail &&
                (listStyle === 'plain' ? (
                  <PermissionBody>{item.detail}</PermissionBody>
                ) : (
                  <PermissionBullets>
                    <PermissionDetail>{item.detail}</PermissionDetail>
                  </PermissionBullets>
                ))}
            </PermissionBlock>
          ))}
        </ConsentScrollBody>

        <ConsentFooterBar>
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
        </ConsentFooterBar>
      </ConsentCard>
    </Page>
  )
}
