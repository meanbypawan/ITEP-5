import Category from "../model/category.model.js";
export const deleteCategory = (request,response,next)=>{
    let categoryId = request.params.categoryKiId;
    Category.delete(categoryId)
    .then(result=>{
      if(result.affectedRows!=0)
        return response.status(200).json({message: 'Category deleted'});
      return response.status(400).json({message: 'Bad Request/category not found'});
    }).catch(err=>{
      return response.status(500).json({error: "Internal Server Error"});
    });
}
export const getCategoryById = (request,response,next)=>{
    let categoryId = request.params.categoryId;
    Category.getCategoryById(categoryId)
    .then(result=>{
        return response.status(200).json({data: result});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error'});
    });
}

export const saveCategory = (request,response,next)=>{
    let categoryName = request.body.categoryName;
    let category = new Category(null,categoryName);

    category.save()
    .then(result=>{
        return response.status(201).json({message: 'Category saved'});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}

export const categoryList = (request,response,next)=>{
    Category.list()
    .then(result=>{
        console.log(result);
        return response.status(200).json({data:  result});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error'});
    });
}