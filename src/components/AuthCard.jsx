import styled from 'styled-components'
import { tokens } from '../tokens'

export const Page = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  box-sizing: border-box;
  background: ${tokens.bg.page};
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
`

export const Card = styled.div`
  width: ${(p) => p.$width ?? tokens.cardWidth}px;
  max-width: 100%;
  box-sizing: border-box;
  background: ${tokens.bg.surface};
  border: 1px solid ${tokens.border.subtle};
  border-radius: 4px;
  padding: ${tokens.space.cardPadding}px;
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${tokens.border.subtle};
  margin: ${tokens.space.section}px 0;
`

export const Brand = styled.div`
  color: ${tokens.fg.default};
  font-size: ${tokens.type.appName.size}px;
  line-height: ${tokens.type.appName.lineHeight};
  font-weight: ${tokens.type.appName.weight};
`

/** Pi as text logo / icon mark — shared size across modals */
export const BrandMark = styled.div`
  margin: 0;
  padding: 0;
  color: ${tokens.fg.default};
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
`

export const Byline = styled.div`
  margin-top: 4px;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
`

export const Title = styled.h1`
  margin: ${tokens.space.stack}px 0 0;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.title.size}px;
  line-height: ${tokens.type.title.lineHeight};
  font-weight: ${tokens.type.title.weight};
`

export const BodyText = styled.p`
  margin: ${tokens.space.tight}px 0 0;
  color: ${tokens.fg.default};
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
`

export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.$fullWidth ? 'stretch' : 'flex-start')};
  gap: ${tokens.space.buttonGap}px;
  margin-top: ${tokens.space.section}px;

  & > button {
    width: 100%;
    max-width: ${(p) => (p.$fullWidth ? 'none' : '277px')};
  }
`

/** Standard-size buttons in a horizontal row, right-aligned */
export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${tokens.space.buttonGap}px;
  margin-top: ${tokens.space.section}px;

  & > button {
    width: auto;
    max-width: none;
  }
`

export const FooterRow = styled.div`
  margin-top: ${tokens.space.stack}px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px;
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
  color: ${tokens.fg.default};
`

export const TextButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  font-size: ${tokens.type.body.size}px;
  line-height: ${tokens.type.body.lineHeight};
  font-weight: ${tokens.type.body.weight};
  color: ${tokens.fg.primary};
  text-decoration: underline;

  &:hover {
    color: #284173;
  }
`
