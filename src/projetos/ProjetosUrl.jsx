export function ProjetosUrl({url, txt}){
    return (
        <a href={url} target="_blank" 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
          {txt}
        </a>
    )
}