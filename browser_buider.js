require('esbuild').buildSync({
    entryPoints: ['app.jsx'],
    bundle:true,
    minify:false,
    sourcemap:true,
    target:['Chrome58','Firefox57','safari11','edge16'],
    outdir: './public/dist',
})