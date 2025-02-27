import HoModal from './HoModal';

export default function HoMessageClassModal(props) {
    return <HoModal maxWidth='xs'
        modalClosed={props?.modalClosed}
        open={props?.open}>
        {props?.children}
    </HoModal>
}