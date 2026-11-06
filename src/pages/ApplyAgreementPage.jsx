import { useRef, useState } from 'react'
import AgreeButton from '../components/form/AgreeButton.jsx'
import InfoTable from '../components/layout/InfoTable.jsx'
import PageInfoHeading from '../components/layout/PageInfoHeading.jsx'
import Prose from '../components/layout/Prose.jsx'
import { AGREEMENTS, APPLICANT_ROWS } from '../data/exampleData.js'
import ApplyLayout from './ApplyLayout.jsx'

function ApplyAgreementPage() {
  const inputsRef = useRef({})
  const [errorLabel, setErrorLabel] = useState(null)

  // 필수 동의를 빠뜨리면 다음 단계로 가지 않고 그 항목으로 포커스를 옮긴다 (F-03).
  const handleNext = () => {
    const missing = AGREEMENTS.find(({ label, required }) => required && !inputsRef.current[label].checked)
    if (!missing) {
      setErrorLabel(null)
      return true
    }

    setErrorLabel(missing.label)
    const input = inputsRef.current[missing.label]
    input.focus()
    input.scrollIntoView({ block: 'center' })
    return false
  }

  const handleChange = (label, event) => {
    if (label === errorLabel && event.target.checked) setErrorLabel(null)
  }

  return (
    <ApplyLayout step={1} title="신청동의 및 서약" prev="/guide/summary" next="/apply/info" onNext={handleNext}>
      <PageInfoHeading className="flow__heading flow__heading--apply">신청정보</PageInfoHeading>
      <div className="flow__content flow__content--apply">
        <InfoTable rows={APPLICANT_ROWS} />
      </div>
      <PageInfoHeading className="flow__heading flow__heading--apply">개인정보 및 약관 동의</PageInfoHeading>
      <div className="flow__content flow__content--apply flow__content--agreement">
        <Prose className="flow__prose">
          <strong>개인정보 및 약관 동의</strong>
          <p>개인정보 수집·이용 및 제공 동의</p>
          <p>국가장학금 Ⅰ유형 신청 및 심사를 위해 신청자의 개인정보를 수집·이용하고, 필요한 범위에서 관계 기관 및 제3자에게 제공·조회할 수 있습니다.</p>
          <p>수집·이용되는 정보에는 신청자의 성명, 주민등록번호 등 고유식별정보, 연락처, 학교 및 학적정보, 가족관계정보, 소득·재산정보, 금융정보 등이 포함될 수 있습니다.</p>
          <p>수집된 정보는 국가장학금 신청·심사·선발·지급 및 사후관리를 위한 목적으로 이용됩니다.</p>
          <p className="prose__note prose__note--bold">※ 국가장학금 신청을 위해서는 개인정보 수집·이용 및 제공에 대한 동의가 필요합니다.</p>
          <strong className="prose__gap">금융정보 등 제공 동의</strong>
          <p>학자금 지원구간 산정을 위해 신청자 및 가구원의 소득·재산·금융자산·부채 등에 관한 정보를 관계 기관으로부터 조회할 수 있습니다.</p>
          <p className="prose__note prose__note--bold">※ 정확한 학자금 지원구간 산정을 위해 신청자와 가구원의 정보제공 동의가 필요할 수 있습니다.</p>
          <strong className="prose__gap">신청인 확인 및 서약</strong>
          <p>본인은 입력한 신청정보가 사실과 다르지 않음을 확인하며, 허위 또는 부정한 방법으로 장학금을 수혜한 경우 관련 규정에 따라 장학금 반환 등의 조치가 이루어질 수 있음을 확인합니다.</p>
        </Prose>
        <div className="flow__agreements">
          {AGREEMENTS.map(({ label, required }, index) => {
            const hasError = label === errorLabel
            const errorId = `agreement-error-${index}`

            return (
              <div className="flow__agreement" key={label}>
                <AgreeButton
                  ref={(input) => {
                    inputsRef.current[label] = input
                  }}
                  required={required}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={(event) => handleChange(label, event)}
                >
                  {label}
                </AgreeButton>
                {hasError && (
                  <p className="flow__agreement-error" id={errorId} role="alert">
                    ※ 필수 항목입니다. 동의해 주세요.
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </ApplyLayout>
  )
}

export default ApplyAgreementPage
