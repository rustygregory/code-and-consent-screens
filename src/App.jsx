import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import PrototypeBar from './prototype-bar/PrototypeBar'
import InspectLayer from './inspect/InspectLayer'
import CommentLayer from './comments/CommentLayer'
import { CodeScreen } from './components/CodeScreen'
import { ConsentScreen } from './components/ConsentScreen'

const VERSIONS = [
  { id: 'code', label: 'Code entry' },
  { id: 'consent-plain', label: 'Consent – plain text' },
  { id: 'consent', label: 'Consent – bullets', archived: true },
]

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const WorkArea = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`

function App() {
  const [step, setStep] = useState('code')
  const [inspectSlot, setInspectSlot] = useState(null)
  const [inspectActive, setInspectActive] = useState(false)
  const [commentSlot, setCommentSlot] = useState(null)

  return (
    <ThemeProvider>
      <Shell>
        <PrototypeBar
          title="Code and Consent screens"
          meta="Started Oct 2026"
          versions={VERSIONS}
          versionId={step}
          onVersionChange={setStep}
          inspectSlotRef={setInspectSlot}
          commentSlotRef={setCommentSlot}
          inspectActive={inspectActive}
        />
        <WorkArea data-comment-root="true" data-inspect-root="true">
          {step === 'code' ? (
            <CodeScreen onNext={() => setStep('consent-plain')} />
          ) : (
            <ConsentScreen
              onBack={() => setStep('code')}
              listStyle={step === 'consent' ? 'bullets' : 'plain'}
            />
          )}
        </WorkArea>
        <InspectLayer
          toggleContainer={inspectSlot}
          onActiveChange={setInspectActive}
        />
        <CommentLayer
          toggleContainer={commentSlot}
          context={{ version: step }}
          onRestoreContext={(saved) => {
            if (saved.version) setStep(saved.version)
          }}
        />
      </Shell>
    </ThemeProvider>
  )
}

export default App
