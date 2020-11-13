import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () => {
    const antIcon = <LoadingOutlined className='spin' spin />
    return (
        <Spin indicator={antIcon} />

    )

}