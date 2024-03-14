import { SProps } from 'ssr-types'
import { IData } from '~/typings/data'
import { useStore } from 'ssr-common-utils'
import { Line } from '@ant-design/charts'

export default function Index (props: SProps) {
  const { indexState: state } = useStore<{indexState: IData}>()
  const showLine = () => {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
  
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
    };
    return <Line {...config} />;
  }
  return (
    <div>
      {showLine()}
    </div>
  )
}
