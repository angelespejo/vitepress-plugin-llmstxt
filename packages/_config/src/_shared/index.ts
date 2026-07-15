
export const exec = async ( cmd: string ): Promise<void> => {

	const { spawn } = await import( 'node:child_process' )
	await new Promise<void>( ( resolve, reject ) => {

		const childProcess = spawn( cmd, {
			shell : true,
			stdio : 'inherit',
		} )

		childProcess.on( 'close', code => {

			if ( code === 0 ) resolve()
			else {

				const error = new Error( `Command failed with code ${code}` )
				reject( error )

			}

		} )

	} )

}

export const getFlagValue = ( flag: string ) => {

	const prefix = `--${flag}=`
	const arg    = process.argv.find( arg => arg.startsWith( prefix ) )
	return arg ? arg.slice( prefix.length ) : undefined

}
