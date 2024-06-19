'use client'



export default function Block() {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5%',
            // border: '1px solid black',
            width: '100%',
            height: '100%',
        }}>
            <div style={{
                width: '40%',
                height: '90%',
                // border: '1px solid black',
                borderRadius: '1rem',
                backgroundColor: '#E6EAEE'
            }}>

            </div>
            <div style={{
                width: '40%',
                height: '90%',
                // border: '1px solid black',
                borderRadius: '1rem',
                backgroundColor: '#E6EAEE'
            }}>

            </div>
        </div>

    )
}