import Emailchanges from './emailchanges/Emailchanges'
import Mobilechange from './mobilechanges/Mobilechange'
import Personalinformation from './Personalinformation'

const Accountsetting = ({ profileState }) => {

    return (
        <div className={profileState === 'Account' ? 'tab-pane fade show active' : 'tab-pane fade '}>
            <div className="my-account-details account-wrapper">
                <Personalinformation />
                <Emailchanges />
                <Mobilechange />
            </div>
        </div>
    )
}

export default Accountsetting