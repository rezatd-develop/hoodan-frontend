export default function LabelBox({ keyLabel, valueLabel }) {
    return <div className="d-flex justify-content-center align-items-center px-3 py-2 rounded rounded-5 border border-dark font-size-15 me-2">
        <div>{keyLabel}</div>
        <div class="vr mx-2"></div>
        <div>{valueLabel}</div>
    </div>
}