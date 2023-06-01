import {ImageResponse} from '@vercel/og'
import {NextRequest} from 'next/server'

export const config = {
    runtime: 'edge',
}
// tw="text-[89.7px] top-0 right-0"
const vivaldiTextFont = fetch(
    new URL('../../public/fonts/VIVALDII.TTF', import.meta.url),
).then(res => res.arrayBuffer())
export default async function (req: NextRequest) {
    const vivaldiTextFontData = await vivaldiTextFont
    const {searchParams} = new URL(req.url)

    const hasName = searchParams.has('name')
    const name = hasName ? searchParams.get('name') : ''

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 120,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <img
                    src={
                        'https://gdgcnagpur.tech/certificates/ccd/2023/certificate.png'
                    }
                />

                <p
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: 622,
                        // left: 600,
                    }}>
                    {name}
                </p>
            </div>
        ),
        {
            width: 2000,
            height: 1400,
            fonts: [
                {
                    name: 'Vivaldi',
                    data: vivaldiTextFontData,
                    style: 'normal',
                },
            ],
        },
    )
}
