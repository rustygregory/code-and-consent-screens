import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Label, Input } from '@zendeskgarden/react-forms'
import {
  Page,
  Card,
  Title,
  BodyText,
  Divider,
  ButtonStack,
} from './AuthCard'
import { tokens } from '../tokens'

const CodeCard = styled(Card)`
  /* 31/39 so outer edge → content reads 32/40 with the 1px border */
  padding: ${tokens.space.codePadTop}px ${tokens.space.codePadX}px
    ${tokens.space.codePadBottom}px;
  color: ${tokens.fg.default};
`

const ScreenTitle = styled(Title)`
  text-align: left;
  margin: 0;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  color: ${tokens.fg.default};
`

const Instruction = styled(BodyText)`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: ${tokens.fg.default};
`

/** Full-bleed across the modal; 20px below the instruction */
const CodeDivider = styled(Divider)`
  margin-top: 20px;
  margin-bottom: ${tokens.space.section}px;
  margin-left: -${tokens.space.codePadX}px;
  margin-right: -${tokens.space.codePadX}px;
  width: calc(100% + ${tokens.space.codePadX * 2}px);
`

const InputLabel = styled(Label)`
  && {
    color: ${tokens.fg.default};
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
`

const CodeInput = styled(Input)`
  && {
    color: ${tokens.fg.default};

    &:not([aria-invalid='true']) {
      border-color: ${tokens.border.input};

      &:hover {
        border-color: ${tokens.border.input};
      }
    }

    &[aria-invalid='true'] {
      border-color: ${tokens.border.dangerEmphasis};

      &:hover {
        border-color: ${tokens.border.dangerEmphasis};
      }
    }
  }
`

/** Flora Field.Message error — circle exclamation + fg/danger */
const ErrorMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
  color: ${tokens.fg.danger};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`

const ErrorIcon = styled.span`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 0;
  color: ${tokens.fg.danger};

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }
`

/** Garden alert-error-stroke — outlined circle with exclamation */
function AlertErrorStrokeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor">
        <circle cx="7.5" cy="8.5" r="7" />
        <path strokeLinecap="round" d="M7.5 4.5V9" />
      </g>
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

/**
 * @param {{ onNext: () => void }} props
 */
const VALID_CODE = '1234'

export function CodeScreen({ onNext }) {
  const [code, setCode] = useState('')
  const [showError, setShowError] = useState(false)

  const handleNext = () => {
    if (code.trim() !== VALID_CODE) {
      setShowError(true)
      return
    }
    setShowError(false)
    onNext()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNext()
  }

  return (
    <Page>
      <CodeCard as="form" onSubmit={handleSubmit}>
        <ScreenTitle>Connect a device</ScreenTitle>
        <Instruction>Enter the code displayed on your device</Instruction>
        <CodeDivider />
        <Field>
          <InputLabel>Enter code</InputLabel>
          <CodeInput
            value={code}
            validation={showError ? 'error' : undefined}
            onChange={(e) => {
              setCode(e.target.value)
              if (showError) setShowError(false)
            }}
            autoComplete="one-time-code"
          />
          {showError && (
            <ErrorMessage role="alert">
              <ErrorIcon>
                <AlertErrorStrokeIcon />
              </ErrorIcon>
              <span>This code is invalid or has expired</span>
            </ErrorMessage>
          )}
        </Field>
        <ButtonStack $fullWidth>
          <Button isPrimary type="submit">
            Next
          </Button>
        </ButtonStack>
      </CodeCard>
    </Page>
  )
}
